const express = require ('express');
const mongoose = require('mongoose');
require('express-async-errors');
const cors = require('cors');
const questionRouter = require('./controler/question');
const config = require('./utils/config.js');
const logger = require('./utils/logger.js')

const app = express();

mongoose.set('strictQuery',false);

const mongoUrl = config.MONGODB_URI;

async function run () {
    await mongoose.connect(mongoUrl);
    logger.info('DB connection sucessful!');
};

run();

app.use(cors());
app.use(express.json());
app.use('/api/questions',questionRouter);
app.use(express.static('dist'));

module.exports = app;