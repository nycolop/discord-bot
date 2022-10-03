const config = require("../config");

const utils = {};

utils.receivedLog = (command) => console.log("Command received: " + command);

utils.timeTaken = (createdTimeStamp) => Date.now() - createdTimeStamp;

utils.getCommand = (msgContent) =>
  msgContent.slice(config.BOT_PREFIX.length).split(" ").shift().toLowerCase();

module.exports = utils;
