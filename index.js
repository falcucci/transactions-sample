"use strict";

const config = require("config");
const app = require("./app.js");

app.listen(
  config.application.port,
  config.application.host,
  err => {
    if (err) throw err;
    console.log(
      "Server is available on http://" +
        config.application.host +
        ":" +
        config.application.port
    );
  }
);
