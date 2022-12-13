const userSchema = require("../models/reservation");



exports.create = async (req, res) => {
    const { DateR, Location,Phone,Cin } = req.body;
    try {
    
      const newReservation = new userSchema(req.body);
      await newReservation.save();
        res.status(200).send({ msg: "reservation is added", newReservation });
    } catch (error) {
      res.status(500).send({ errors: [{ msg: "could not add reservation" }] });
    }
  };