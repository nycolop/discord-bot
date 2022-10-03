const { BOT_PREFIX } = require("../config");
const utils = require("../utils");

const controller = {};

// https://discord.js.org/#/docs/discord.js/main/class/Client?scrollTo=e-messageCreate
controller.messageCreate = (message) => {
  // Validations, because the bot reads all the messages in the channel and server
  if (message.author.bot) return;
  if (!message.content.startsWith(BOT_PREFIX)) return;

  const command = utils.getCommand(message.content);

  if (command) utils.receivedLog(command);
  switch (command) {
    case "ping":
      const timeTaken = utils.timeTaken(message.createdTimestamp);
      message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
      break;
    case "xd":
      message.reply("xd");
      break;
  }
};

module.exports = controller;
