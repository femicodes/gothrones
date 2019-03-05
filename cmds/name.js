const ora = require('ora');
const {
    getCharacterByName
} = require('../src/api');

module.exports = (args) => {
    const spinner = ora().start()

    try {
        const name = getCharacterByName(args)
        spinner.stop()
        console.log(name)

    } catch (err) {
        spinner.stop()
        console.error(err);
    }

}