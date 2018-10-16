
module.exports = function (controller) {
    controller.middleware.send.use(function (bot, message, next) {
        message.disable_input = true;
        next();
    });

    controller.middleware.receive.use(function (bot, message, next) {
        //console.log(message);
        next();
    });
};
