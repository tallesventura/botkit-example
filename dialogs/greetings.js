const utils = require('../components/utils');

module.exports = function (controller) {
  
    controller.on('greetings', function (bot, message) {
         // console.log("\n==================================================\n");
         // console.log(message);
        bot.createConversation(message, function (err, convo) {
            console.log(message);
            let userName = message.user_profile.name;
            let greetings = utils.getGreetings();
            let text = 'Ei ' + userName + ', ' + greetings + ' blz?';
            convo.say({text: text});

            convo.say({text: 'Meu nome é Kuala, o coala do Kuau... rá!'});

            let quickReplies = [
                {
                    title: 'Sim',
                    payload: 'sim'
                },
                {
                    title: 'Na verdade não...',
                    payload: 'nao'
                }
            ];

            let content = {
                text: 'Você curte coalas?',
                quick_replies: quickReplies
            };

            convo.addQuestion(content, [
                {
                    pattern:'sim',
                    default: true,
                    callback: function (response, convo) {
                        controller.trigger('koala', [bot, message]);
                        convo.next();
                    },
                },
                {
                    pattern:'nao',
                    default: true,
                    callback: function (response, convo) {
                        controller.trigger('not-koala', [bot, message]);
                        convo.next();
                    },
                }
            ]);

            convo.activate();
        });
    });
};