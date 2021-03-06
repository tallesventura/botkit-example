module.exports = function (controller) {
    controller.on('not-koala', function (bot, message) {
        bot.createConversation(message, function (err, convo) {
            convo.say({
                text: 'Como assim não? Me dê uma chance!',
                files: [
                    {
                        url: 'https://68.media.tumblr.com/196c343d31019f96ff7eec75587c50cd/tumblr_npaid8bfC91ux9eawo1_400.gif',
                        image: true
                    }
                ]
            });

            let quickReplies = [
                {
                    title: 'Então tá, amigos!',
                    payload: 'ok'
                }
            ];

            let content = {
                text: '#AmigosParaSempre?',
                quick_replies: quickReplies
            };

            convo.addQuestion(content, function (response, convo) {
                controller.trigger('koala', [bot, message]);
            });

            convo.activate();
        });
    });
};