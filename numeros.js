const Logger = require('logplease');
const logger = Logger.create('utils');

exports.esPar = (a) => {
if (a % 2 == 0){
    logger.info (`El número es par`)
} else {
    logger.error(`El número no es par `);
}
}
