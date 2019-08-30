const express = require("express");
const path = require("path");

const app = express();

app.set('view engine', 'pug')
app.locals.pretty = true;
app.set('views', path.join(__dirname, "./views"));

const routes = require('./routes');

app.use(express.static('public'));
app.get('/favicon.ico', (req, res, next) => {
    return res.sendStatus(204);
})
app.use('/', routes());

app.listen(3000, () => {
    console.log("server is up and running on port 3000")
});

module.exports = app;