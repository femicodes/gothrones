#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');

const {
    getCharacterByName,
    getHouseByName,
    getRandomCharacter,
    getRandomHouse
} = require('./api');

program
    .version('1.0.0')
    .description(chalk.black.bgBlue('GAME OF THRONES WIKI'))

program
    .command('name <characterName>')
    .alias('c')
    .description('Search for a particular character')
    .action((characterName) => {
        getCharacterByName(characterName);
    })

program
    .command('house <houseName>')
    .alias('h')
    .description('Search for a particular house')
    .action((houseName) => {
        getHouseByName(houseName);
    })

program
    .command('random-character')
    .alias('rc')
    .description('Get a random character')
    .action(() => {
        getRandomCharacter();
    })

program
    .command('random-house')
    .alias('rh')
    .description('Get a random house')
    .action(() => {
        getRandomHouse();
    })

program.parse(process.argv);