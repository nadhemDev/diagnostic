const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  DateR: {
    type: String,
    required: true,
    trim: true,
    default: "",
    // validate: [validateLocalStrategyProperty, "Please fill in your first name"],
  },
  location: {
    type: String,
    required: true,
    trim: true,
    default: "",
    // validate: [validateLocalStrategyProperty, "Please fill in your last name"],
  },

  Cin: {
    type: String,
    unique: "testing error message",
    required: "Please fill in cin",
    trim: true,
  },
  Phone: {
    type: String,
    unique: "testing error message",
    required: "Please fill in cin",
    trim: true,
  },
 
 
});

module.exports = mongoose.model("reservation", reservationSchema);
