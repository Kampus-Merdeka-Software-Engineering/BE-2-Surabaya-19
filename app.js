require("dotenv").config();
const express = require("express");

const cors = require("cors");

app.use(cors());

const app = express();

const menusRoutes = require("./routes/menusRoutes");

app.use(menusRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
