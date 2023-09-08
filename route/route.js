const express = require('express');

const endPointRouter = express.Router();
const data = require('../database/db');


endPointRouter.get('/', (req, res) => {
    const slack_name = req.query.slack_name;
    const track = req.query.track;


    if (!(slack_name ==='Adeyinka Oresanya' && track ==='backend')) {
        res.status(404).end("Information not found. Please input the correct parameters")
        return
    }

    res.status(200).json(data);
})




module.exports = endPointRouter


