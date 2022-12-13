const express = require("express");
const {
  register,
  getusers,
  deleteuser,
  putuser,
  login,
  getone,
} = require("../controllers/user");
const { isAuth } = require("../middlewares/auth");
const {
  RegisterValidation,
  validation,
  loginValidation,
} = require("../middlewares/Validation");

const userRoutes = express.Router();

userRoutes.post("/register", RegisterValidation, validation, register);
userRoutes.post("/login", loginValidation, validation, login);
userRoutes.get("/current", isAuth, (req, res) => {
  res.send({ user: req.users });
});
userRoutes.get("/getusers", getusers);
userRoutes.delete("/deleteuser/:id", deleteuser);
userRoutes.put("/putuser/:id", putuser);
userRoutes.get("/:id", getone);

module.exports = userRoutes;
