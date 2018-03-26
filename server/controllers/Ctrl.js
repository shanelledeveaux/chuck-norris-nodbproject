const axios = require("axios");

let newJoke = [];
let favorites = [];
let newId = 1;
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
    favorites.push({joke: req.body.joke, id: newId});
    newId++;
    res.status(200).json(favorites);
};

const editFavorite = (req, res, next) => {
    // let index = favorites.findIndex(e => e.id===req.params.id)
    // console.log(req.params.id)
    // console.log(index)
    favorites.forEach(joke => {
        if (joke.id===req.params.id) {
            joke ={
             joke: req.body.joke,
            //  id: joke.id
            }
            }
    })
    console.log(favorites)
    res.status(200).json(favorites);
};

const deleteFavorite = (req, res, next) => {
    for (let i = 0; i < favorites.length; i++) {
        if (favorites[i].id === parseInt(req.params.id)){
            favorites.splice(i,1);
            return res.status(200).json(favorites);
        }
        
    }
    // favorites.splice(req.params.id, 1);
    res.status(200).json(favorites);
}

module.exports = {
    getJoke,
    addFavorite,
    editFavorite,
    deleteFavorite,
    getFavorites
}