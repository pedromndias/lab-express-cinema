// 1. Require mongoose:
const mongoose = require("mongoose");

// 2. Create Schema:
const movieSchema = new mongoose.Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String],
});

// 3. Create Model:
const Movie = mongoose.model("Movie", movieSchema);

// 4. Export:
module.exports = Movie;