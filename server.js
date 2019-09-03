const express = require('express');

const server = express();
let actors = [
    {
        id: 1,
        name: "Elijah Wood",
        movies: [
            1, 2
        ]
    },
    {
        id: 2,
        name: "Robert Downy Jr",
        movies: [4]
    }
]
let movies = [
    {   
        id: 1,
        name: "The Fellowship of the Ring",
        released: true,
        rating: 5,
    },
    {
        id: 2,
        name: "The Two Towers",
        released: true,
        rating: 4,
    },
    {
        id: 3,
        name: "The Children of Hurin",
        released: false,
        rating: null,
    },
    {
        id: 4,
        name: "Avengers Endgame",
        released: true,
        rating: 5
    }
]


server.get('/', (req, res) => {
    res.status(200).json({api: 'up...'});
})

server.get('/movies', (req, res) => {
    res.status(200).json(movies)
})

server.get('/actors', (req, res) => {
    res.status(200).json(actors)
})

module.exports = server

exports.add = (a, b) => {return a +  b}

exports.secret = 'keep it secret, keep it safe'