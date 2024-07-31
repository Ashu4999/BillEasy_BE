const jwt = require("jsonwebtoken");
const { DBModels } = require("../config/dbConn");

let forcedPublicRoute = [{ method: "post", path: "/users" }]; 

const authVerify = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  const isPublicRoute = forcedPublicRoute.filter(route =>
    route.method.toLowerCase() === req.method.toLowerCase() && route.path === req.path
  );

  if (isPublicRoute.length) {
    return next(); 
  }

  if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401);

  //getting token from request header
  const accessToken = req.headers["authorization"].split(" ")[1];

  //verifying access token
  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
    if (err) return res.sendStatus(403); //Forbidden

    let foundUser = await DBModels.user.findOne({ where: { id: decoded.id }});
    if (!foundUser) return res.sendStatus(403);
     
    req.username = decoded.username;
    req.id = decoded.id;
    next();
  });
};

module.exports = authVerify;
