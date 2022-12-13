const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    default: "",
    // validate: [validateLocalStrategyProperty, "Please fill in your first name"],
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    default: "",
    // validate: [validateLocalStrategyProperty, "Please fill in your last name"],
  },
  email: {
    type: String,
    trim: true,
    // default: "",
    // validate: [validateLocalStrategyProperty, "Please fill in your email"],
    // match: [/.+\@.+\..+/, "Please fill a valid email address"],
    unique: true,
  },
  username: {
    type: String,
    unique: "testing error message",
    required: "Please fill in a username",
    trim: true,
  },
  password: {
    type: String,
    default: "",
    required: true,
    // validate: [validateLocalStrategyPassword, "Password should be longer"],
  },
  profilePic: {
    type: String,
    default:
      "https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png",
  },
  roles: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

module.exports = mongoose.model("user", userSchema);
