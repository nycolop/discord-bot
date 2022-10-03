const Bot = require("discord-bot"); // Not necessary, library for bots that works with "discord.js" module

const { BOT_TOKEN } = require("./config");
const controller = require("./controllers");

const client = require("./config/client");

client.on("messageCreate", controller.messageCreate);

client.login(BOT_TOKEN); // Discord bot token: https://discord.com/developers/applications
