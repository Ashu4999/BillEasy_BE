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
}

// const register = (req, res) => {
//     try {
//         return res.send("Register API");
//     } catch (Exception) {
//         return res.send(Exception.toString());
//     }
// }

module.exports = { login };

