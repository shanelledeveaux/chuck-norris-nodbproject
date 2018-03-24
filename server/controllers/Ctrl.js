const axios = require("axios");

let newJoke = [];
let favorites = [];
let title = "Most Coolest Chuck Norris Jokes";

const getJoke = (req, res, next) => {
    axios.get(`https://api.chucknorris.io/jokes/random`).then(
        response => {
            console.log(response.data.value);
            res.status(200).json(response.data)})
};

const getFavorites = (req, res, next) => {
    res.status(200).json(favorites);
}

const addFavorite = (req, res, next) => {
    favorites.push(req.body.joke);
    res.status(200).json(favorites);
};

const editFavorite = (req, res, next) => {

};

const deleteFavorite = (req, res, next) => {
    favorites.splice(req.params.id, 1);
    res.status(200).json(favorites);
}

module.exports = {
    getJoke,
    addFavorite,
    editFavorite,
    deleteFavorite,
    getFavorites
}