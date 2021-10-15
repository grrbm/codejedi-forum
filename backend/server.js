require("dotenv").config();

const mongoose = require("mongoose"),
  app = require("./app");

const local = process.env.LOCAL_SERVER || false;

// --------------------------------------------------------------------
// MONGODB/MONGOOSE
// --------------------------------------------------------------------
const db = require("./src/utils/db");
db.connect();

// --------------------------------------------------------------------
// SERVER LISTENER
// --------------------------------------------------------------------

if (local)
  app.listen(process.env.PORT || 4000, () =>
    console.log("CodeJedi backend listening on port 4000!")
  );

module.exports = app;
