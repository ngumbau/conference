const express = require("express");

const router = express.Router();

const speakersRoute = require('./speakers')
const feedbackRoute = require('./feedback')
const indexRoute = require('./index')

module.exports = () => {

    router.get('/', (req, res, next) => {
        return res.render("index.pug");
    });

    router.use('/speakers', speakersRoute());

    router.use('/feedback', feedbackRoute());

    return router;
};