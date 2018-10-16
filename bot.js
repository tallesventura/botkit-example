/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
           ______     ______     ______   __  __     __     ______
          /\  == \   /\  __ \   /\__  _\ /\ \/ /    /\ \   /\__  _\
          \ \  __<   \ \ \/\ \  \/_/\ \/ \ \  _"-.  \ \ \  \/_/\ \/
           \ \_____\  \ \_____\    \ \_\  \ \_\ \_\  \ \_\    \ \_\
            \/_____/   \/_____/     \/_/   \/_/\/_/   \/_/     \/_/


# EXTEND THE BOT:

  Botkit has many features for building cool and useful bots!

  Read all about it here:

    -> http://howdy.ai/botkit

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var env = require('node-env-file');
env(__dirname + '/.env');

var Botkit = require('botkit');
var debug = require('debug')('botkit:main');
const fs = require('fs');
const path = require("path");

var bot_options = {
    debug: false,
    replyWithTyping: true,
    typingDelayFactor: 0.3
};

// Create the Botkit controller, which controls all instances of the bot.
var controller = Botkit.anywhere(bot_options);

// Set up an Express-powered webserver to expose oauth and webhook endpoints
var webserver = require(__dirname + '/components/express_webserver.js')(controller);

// Open the web socket server
controller.openSocketServer(controller.httpserver);

// Start the bot brain in motion!!
controller.startTicking();

var normalizedDialogsPath = path.join(__dirname, "dialogs");
fs.readdirSync(normalizedDialogsPath).forEach(function(file) {
    require("./dialogs/" + file)(controller);
});

var normalizedSkillsPath = path.join(__dirname, "skills");
fs.readdirSync(normalizedSkillsPath).forEach(function(file) {
  require("./skills/" + file)(controller);
});


console.log('I AM ONLINE! COME TALK TO ME: http://localhost:' + (process.env.PORT || 3000))


