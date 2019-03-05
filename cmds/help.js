const chalk = require('chalk');

const menus = {
    main: `
        GOT [command] <input>

        name  ----------  show the chosen character
        randomName  ----------  show a random character
        
        house  ---------- show the chosen house
        randomHouse  -----------  show a random house

        ${chalk.yellow('help')}  --help
        ${chalk.green('version')}  --version
    `
}

module.exports = (args) => {
    const subCmd = args._[0] === 'help' ?
        args._[1] :
        args._[0]

    console.log(menus[subCmd] || menus.main)
}