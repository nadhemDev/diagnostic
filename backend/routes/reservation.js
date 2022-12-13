const express = require("express");
const {
  create,
} = require("../controllers/reservation");
// const { isAuth } = require("../middlewares/auth");

const reservationRoutes = express.Router();

reservationRoutes.post("/create", create);



// userRoutes.post("/login", loginValidation, validation, login);
// userRoutes.get("/current", isAuth, (req, res) => {
//   res.send({ user: req.users });
// });
// userRoutes.get("/getusers", getusers);
// userRoutes.delete("/deleteuser/:id", deleteuser);
// userRoutes.put("/putuser/:id", putuser);
// userRoutes.get("/:id", getone);

module.exports = reservationRoutes;
