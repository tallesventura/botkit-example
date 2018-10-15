module.exports = function (controller) {
    controller.on('not-koala', function (bot, message) {
        // console.log("\n==================================================\n");
        // console.log(message);
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

            let quickReplies = [
                {
                    title: 'Ok',
                    payload: 'ok'
                }
            ];

            let content = {
                text: 'Me dá uma chance? Tenho certeza que seremos grandes amigos',
                quick_replies: quickReplies
            };

            convo.addQuestion(content, function (response, convo) {
                controller.trigger('koala', [bot, message]);
            });

            convo.activate();
        });
    });
};