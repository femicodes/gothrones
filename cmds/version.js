const {
    version
} = require('../package.json')

const chalk = require('chalk');

module.exports = (args) => {
    console.log(
        `v${chalk.bold.green(version)}`
    )
}