const axios = require('axios');

exports.getCharacterByName = (param) => {
    axios.get(`http://www.anapioficeandfire.com/api/characters/?name=${param}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        })
}

exports.getHouseByName = (param) => {
    axios.get(`http://www.anapioficeandfire.com/api/houses/?name=${param}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        })
}

exports.getCharacterByID = (param) => {
    axios.get(`https://www.anapioficeandfire.com/api/characters/${param}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        })
}

exports.getHouseByID = (param) => {
    axios.get(`https://www.anapioficeandfire.com/api/houses/${param}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        })
}


//getHouseByName();
//getCharacterByName('jon snow');

exports.getRandomCharacter = () => {
    let index = Math.floor(Math.random() * 101)
    return getCharacterByID(index);
}

exports.getRandomHouse = () => {
    let index = Math.floor(Math.random() * 101)
    return getHouseByID(index);
}

//getRandomCharacter();
//getRandomHouse();