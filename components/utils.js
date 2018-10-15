
exports.buildMessage = function (msg, text, type, ) {
    var normalizedMsg = {
        user: msg.user,
        channel: msg.channel,
        user_profile: msg.user_profile || null,
        text: text,
        type: type
    }
};