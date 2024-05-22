require('dotenv').config();
const winston = require('winston');
const { combine, timestamp, json, errors } = winston.format
const logger = winston.createLogger({
    level: process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 'info',
    format: combine(errors({ stack: true }), timestamp(), json()),
    transports: [new winston.transports.Console()]

})
logger.info("Booting application")
const app = require('./bot.js')
const botApi = require('node-telegram-bot-api')
app.app(logger, botApi)
