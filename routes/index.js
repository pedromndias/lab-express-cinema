const express = require('express');
const router = express.Router();

// require our Model to start using it:
const Movie = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET movies page */
router.get("/movies", (req, res, next) => {
    // get the movies from DB:
    Movie.find()
    // select only the properties we need:
    .select({title: 1, image: 1})
    .then((response) => {
        console.log(response);
        res.render("movies", {
            movie: response
        });
    })
    .catch((err) => {
        // If there is an error, we call the error handlers with "next":
        next(err);
    })
    
})

/* GET "/movie/if" => Show movie details by its id */
router.get("/movie/:id", async (req, res, next) => {
    try {
        // Call the DB to get a movie by its id:
        const response = await Movie.findById(req.params.id)
        console.log(response)
        res.render("movie-details", {
            singleMovie: response
        })
    } catch (err) {
        next(err)
    }
})

module.exports = router;
