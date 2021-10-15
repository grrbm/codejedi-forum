const express = require("express"),
  router = express.Router(),
  cors = require("cors"),
  app = express();

var path = require("path");

// --------------------------------------------------------------------
// APP CONFIG
// --------------------------------------------------------------------

const local = process.env.LOCAL_SERVER || false;
const proxy = "";

app
  .use(cors())
  .use(express.json({ limit: "50mb" }))
  .use(express.urlencoded({ limit: "50mb", extended: true }))
  .use(proxy, router);

// --------------------------------------------------------------------
// ROUTES
// --------------------------------------------------------------------

const AuthRouter = require("./routers/auth"),
