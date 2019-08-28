const express = require("express");
const app = express();

const routes = require('./routes');

app.use('/', routes());

app.listen(3000, () => {
    console.log("server is up and running on port 3000")
});

module.exports = app;