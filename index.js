const express = require("express");
const app = express();
const PORT = process.env.PORT || 4500;
const { sequelize } = require("./config/dbConn");
const { userRoutes, authRoutes, ticketRoutes } = require("./routes");
const authVerify = require("./middlewares/authVerify");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
    return res.send("Home");
});
app.use("/auth", authRoutes);
app.use(authVerify);
app.use("/users", userRoutes);
app.use("/tickets", ticketRoutes);

app.all("*", (req, res) => {
  return res.status(404).send("Not Found");
});

const initApp = () => {
  try {
    sequelize.sync().then(() => {
      console.log(`DB Connected`);
      app.listen(PORT, (req, res) => {
        console.log(`server is listening on port ${PORT}`);
      });
    });
  } catch (Exception) {
    console.log("Error", Exception);
  }
};

initApp();