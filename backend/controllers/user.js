const userSchema = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/*************************************Register ********************************************/

exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const foundUser = await userSchema.findOne({ email });
    if (foundUser) {
      return res.status(400).send({ errors: [{ msg: "user already exist" }] });
    }
    const newUser = new userSchema(req.body);
    const salt = 10;
    const hashPassword = bcrypt.hashSync(password, salt);
    newUser.password = hashPassword;

    const payload = { id: newUser._id };
    const token = jwt.sign(payload, process.env.secretOrKey);
    await newUser.save();

    res.status(200).send({ msg: "user is added", newUser, token });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "could not add user" }] });
  }
};
/***************************************** LOGIN ************************************** */
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const foundUser = await userSchema.findOne({ email });
    if (!foundUser) {
      return res.status(400).send({ errors: [{ msg: "bad credentials " }] });
    }
    const match = await bcrypt.compare(password, foundUser.password);
    if (!match) {
      return res.status(400).send({ errors: [{ msg: "baaaaaaaaaaad" }] });
    }
    const payload = { id: foundUser._id };
    const token = jwt.sign(payload, process.env.secretOrKey);

    return res
      .status(200)
      .json({ msg: "successfulllllllllllllll", foundUser, token });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "could not login" }] });
  }
};

/*************************************GET USERS ********************************************/

exports.getusers = async (req, res) => {
  try {
    const users = await userSchema.find();
    res.status(200).send({ msg: "your user list", users });
  } catch (error) {
    res.status(500).send({ msg: "could not get list of users" });
  }
};
/*************************************DELETE USER ********************************************/

exports.deleteuser = async (req, res) => {
  try {
    const user = await userSchema.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "user removed successfully" });
  } catch (error) {
    res.status(500).send({ msg: "user could not remove" });
  }
};
/*************************************PUT USER ********************************************/

exports.putuser = async (req, res) => {
  try {
    const user = await userSchema.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).send("user updated");
  } catch (error) {
    res.status.send({ msg: "user could not update" });
  }
};
/*************************************GETONE USER ********************************************/

exports.getone = async (req, res) => {
  try {
    const users = await userSchema.findById(req.params.id);
    res.status(200).send({ msg: "user is", users });
  } catch (error) {
    res.status(500).send("could not find");
  }
};
