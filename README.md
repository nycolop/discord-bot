# Discord BOT, Node JS

## **Setting Up a Discord Bot**
In this step, you’ll use the Discord developers graphical user interface (GUI) to set up a Discord bot and get the bot’s token, which you will pass into your program.

In order to register a bot on the Discord platform, use the Discord application dashboard. Here developers can create Discord applications including Discord bots.

For that visit: https://discord.com/developers/applications

To get started, click New Application. Discord will ask you to enter a name for your new application. Then click Create to create the application.

Note: The name for your application is independent from the name of the bot, and the bot doesn’t have to have the same name as the application.

Now open up your application dashboard. To add a bot to the application, navigate to the Bot tab on the navigation bar to the left.

Click the Add Bot button to add a bot to the application. Click the Yes, do it! button when it prompts you for confirmation. You will then be on a dashboard containing details of your bot’s name, authentication token, and profile picture.

You can modify your bot’s name or profile picture here on the dashboard. You also need to copy the bot’s authentication token by clicking Click to Reveal Token and copying the token that appears.

Warning: Never share or upload your bot token as it allows anyone to log in to your bot.

Now you need to create an invite to add the bot to a Discord guild where you can test it. First, navigate to the URL Generator page under the OAuth2 tab of the application dashboard. To create an invite, scroll down and select bot under scopes. You must also set permissions to control what actions your bot can perform in guilds. For the purposes of this tutorial, select Administrator, which will give your bot permission to perform nearly all actions in guilds. Copy the link with the Copy button.

OAuth2 tab, with scope set to "bot" and permissions set to "administator"

Next, add the bot to a server. Follow the invite link you just created. You can add the bot to any server you own, or have administrator permissions in, from the drop-down menu.

Now click Continue. Ensure you have the tickbox next to Administrator ticked—this will grant the bot administrator permissions. Then click Authorize. Discord will ask you to solve a CAPTCHA before the bot joins the server. You’ll now have the Discord bot on the members list in the server you added the bot to under offline.

Members list of a Discord server with the newly created bot under the "offline" section of the members list

\

** Once all this steps are done, you need to put the Bot token into the config.json "BOT_TOKEN" property **

        Source: https://www.digitalocean.com/community/tutorials/how-to-build-a-discord-bot-with-node-js