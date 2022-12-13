const express = require("express");
const connectDb = require("./config/connectDb");
const reservationRoutes = require("./routes/reservation");
const userRoutes = require("./routes/user");
require("dotenv").config();

const app = express();
connectDb();
app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/reservation", reservationRoutes);
app.listen(process.env.port, () =>
  console.log(`your server is running on port ${process.env.port}`)
);
