
module.exports = function (controller) {
    controller.middleware.send.use(function (bot, message, next) {
        message.disable_input = true;
        next();
    });
};