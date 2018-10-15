module.exports = function (controller) {
    controller.on('koala', function (bot, message) {
        // console.log("\n==================================================\n");
        // console.log(message);
        bot.createConversation(message, function (err, convo) {
            convo.say('Aeeeeeeee!');
            convo.say({
                text: 'Já sei que vamos nos dar muito bem!!',
                files: [
                    {
                        url: 'https://media.giphy.com/media/TmLCLuc8xWPoA/200w_d.gif',
                        image: true
                    }
                ]
            });
            convo.say('Mas peraí, eu nem te conheço!');

            convo.activate();
        });
    });
};