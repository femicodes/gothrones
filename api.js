const axios = require('axios');

let getCharacterByName = (param) => {
    axios.get(`http://www.anapioficeandfire.com/api/characters/?name=${param}`)
        .then(response => {
            console.log(`
                Name:   ${response.data[0]['name']}
                Gender: ${response.data[0]['gender']}
                Culture: ${response.data[0]['culture']}
                Title(s): ${response.data[0]['titles'][0]}
                Alias(es): ${response.data[0]['aliases'][0]}
                Played by: ${response.data[0]['playedBy']}
            `);
            //console.log(response.data[0]['gender']);
        })
        .catch(() => {
            console.log('An error occured! Check your network connection');
        })
}

let getHouseByName = (param) => {
    axios.get(`http://www.anapioficeandfire.com/api/houses/?name=${param}`)
        .then(response => {
            console.log(`
            Name:   ${response.data[0]['name']}
            Region: ${response.data[0]['region']}
            Coat of arms: ${response.data[0]['coatOfArms']}
            Words: ${response.data[0]['words']}
            Title: ${response.data[0]['titles'][0]}
            Seats: ${response.data[0]['seats'][0]}
        `);
        })
        .catch(() => {
            console.log('An error occured! Check your network connection');
        })
}

let getCharacterByID = (param) => {
    axios.get(`https://www.anapioficeandfire.com/api/characters/${param}`)
        .then(response => {
            // console.log(response.data['name']);
            console.log(`
                Name:   ${response.data['name']}
                Gender: ${response.data['gender']}
                Culture: ${response.data['culture']}
                Title(s): ${response.data['titles'][0]}
                Alias(es): ${response.data['aliases'][0]}
                Played by: ${response.data['playedBy']}
            `);
        })
        .catch(() => {
            console.log('an error occured!');
        })
}

let getHouseByID = (param) => {
    axios.get(`https://www.anapioficeandfire.com/api/houses/${param}`)
        .then(response => {
            console.log(`
            Name:   ${response.data['name']}
            Region: ${response.data['region']}
            Coat of arms: ${response.data['coatOfArms']}
            Words: ${response.data['words']}
            Title: ${response.data['titles'][0]}
            Seats: ${response.data['seats'][0]}
        `);
            //console.log(response.data);
        })
        .catch(() => {
            console.log('an error occured!');
        })
}


//getHouseByName();
//getCharacterByName('sansa stark');

let getRandomCharacter = () => {
    let index = Math.floor(Math.random() * 101)
    return getCharacterByID(index);
}

let getRandomHouse = () => {
    let index = Math.floor(Math.random() * 444)
    return getHouseByID(index);
}

//getRandomCharacter();
//getRandomHouse();

module.exports = {
    getCharacterByName,
    getHouseByName,
    getRandomCharacter,
    getRandomHouse
};