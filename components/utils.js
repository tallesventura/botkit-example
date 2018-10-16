const time = require('time');


exports.getGreetings = function () {
    let date = new time.Date();
    date.setTimezone('America/Sao_Paulo');
    date = date.getHours();

    return date < 12 ? 'Bom dia!' : date < 18 ? 'Boa tarde!' : 'Boa noite!';
};