
module.exports = function (controller) {
  
    controller.on('greetings', function (bot, message) {
        bot.createConversation(message, function (err, convo) {
            convo.say({text: 'É a primeira vez que te vejo por aqui.'});
            convo.say({text: 'Deixa eu me apresentar... pode me chamar de Kuala, o coala do Kuau!'});

            let quickReplies = [
                {
                    title: 'Sim',
                    payload: 'sim'
                },
                {
                    title: 'Não',
                    payload: 'nao'
                }
            ];

            let message = {
                text: 'Você curte coalas?',
                quick_replies: quickReplies
            };

            convo.addQuestion(message, [
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