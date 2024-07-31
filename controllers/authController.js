const { DBModels } = require("../config/dbConn");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    try {
        let { email, password } = req.body;

        let where = { email };

        let foundUser = await DBModels.user.findOne({ where });

        if (!foundUser)
            throw { code: 409, message: "User not found." };

        const isPassEqual = await bcrypt.compare(password, foundUser.password);

        if (!isPassEqual) {
            throw { code: 401, message: "Invalid Crendentials" };
        }

        const accessToken = jwt.sign(
            { username: foundUser.name, id: foundUser.id },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "30m" }
        );

        const refreshToken = jwt.sign(
            { username: foundUser.name, id: foundUser.id },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: "2d" }
        );

        foundUser.set("refreshToken", refreshToken);
        await foundUser.save();

        res.cookie("jwt", refreshToken, {
            httpOnly: true,
            // domain: process.env.REACT_PROJECT_DOMAIN, sameSite: 'None', secure: true, //for https and different domains
            maxAge: 24 * 60 * 60 * 1000,
        });

        return res.send({ message: "Logged IN!!!", accessToken });
    } catch (Exception) {
        let customeError = null;
        if (Exception.name === "SequelizeUniqueConstraintError") {
            customeError = Exception.errors[0].message;
        }
        return res.status(Exception.code || 500).json({
            message: customeError || Exception.message || Exception.toString(),
        });
    }
};

const refreshToken = async (req, res) => {
    try {
      const cookies = req.cookies;
      console.log(cookies);
      if (!cookies?.jwt) return res.sendStatus(403);
  
      let refreshToken = cookies?.jwt;
  
      let foundUser = await DBModels.user.findOne({ where: { refreshToken } });
  
      if (!foundUser) return res.sendStatus(403);
  
      jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
          //throwing err if token username and DB token username not matched
          if (err || decoded.username != foundUser.name)
            return res.sendStatus(403);
  
          const accessToken = jwt.sign(
            {
              username: decoded.username,
              id: decoded.id,
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "5m" }
          );
  
          return res
            .status(201)
            .json({ message: "Access token created", accessToken });
        }
      );
    } catch (Exception) {
      console.log(Exception);
      return res.status(500).json({ message: "Something went wrong" });
    }
  };

module.exports = { login, refreshToken };

