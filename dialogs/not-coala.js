module.exports = function (controller) {
    controller.on('not-koala', function (bot, message) {
        bot.createConversation(message, function (err, convo) {
            convo.say('Aeeeeeeee!');
            convo.say({
                text: 'Como assim não? Calma, não vai embora não, please!',
                files: [
                    {
                        url: 'https://68.media.tumblr.com/196c343d31019f96ff7eec75587c50cd/tumblr_npaid8bfC91ux9eawo1_400.gif',
                        image: true
                    }
                ]
            });

            convo.activate();
        });
    });
};