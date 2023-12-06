require("dotenv").config();
const express = require("express");

const app = express();

const menusRoutes = require("./routes/menusRoutes");

app.use(menusRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
