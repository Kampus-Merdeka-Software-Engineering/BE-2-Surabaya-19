require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const menusRoutes = require("./routes/menusRoutes");

app.use(menusRoutes);

const PORT = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function () {
  console.log(`Listening on port ${PORT}`);
});
