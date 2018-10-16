module.exports = function(controller) {

    controller.on('hello', function(bot, message) {
        controller.trigger('greetings', [bot, message]);
    });

    controller.on('welcome_back', function(bot, message) {
        controller.trigger('greetings', [bot, message]);
    });

    controller.on('reconnect', function(bot, message) {
        controller.trigger('greetings', [bot, message]);
    });


    controller.on('connection', function (bot, event) {
        controller.trigger('greetings', [bot, event]);
    });
};
