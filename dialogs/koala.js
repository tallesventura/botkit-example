module.exports = function (controller) {
    controller.on('koala', function (bot, message) {
        // console.log("\n==================================================\n");
        // console.log(message);
        bot.createConversation(message, function (err, convo) {
            convo.say({
                text: 'Aeeeeeeee!',
                files: [
                    {
                        url: 'https://media.giphy.com/media/TmLCLuc8xWPoA/200w_d.gif',
                        image: true
                    }
                ]
            });
            convo.say('Mas peraí, eu nem te conheço!');

            let userName = message.user_profile.name;
            let text = userName + ', quero saber 3 coisas sobre você. Prometo não ser chato!!';
            let quickReplies = [
                {
                    title: 'Vamos nessa!',
                    payload: 'ok'
                }
            ];
            let content = {
                text: text,
                quick_replies: quickReplies
            };
            
            convo.addQuestion(content, function (response, convo) {
                
            });

            convo.activate();
        });
    });
};