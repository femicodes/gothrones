const minimist = require('minimist');
const chalk = require('chalk');

const err = chalk.bold.bgRed;

module.exports = () => {
    const args = minimist(process.argv.slice(2))
    let cmd = args._[0] || 'help';

    if (args.version || args.v) {
        cmd = 'version'
    }

    if (args.help || args.h) {
        cmd = 'help'
    }

    switch (cmd) {
        case 'name':
            require('./cmds/name')(args)
            break

        case 'version':
            require('./cmds/version')(args)
            break

        case 'help':
            require('./cmds/help')(args)
            break

        default:
            console.error(`"${err(cmd)}" is not a valid command!`)
            break
    }

}