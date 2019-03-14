let express=require('express')
let router = express.Router();
const { getAllMovies, getOneMovie, getAllMoviesForGenre, getMoviesAndRating } = require('../database/queries/movies')

router.get('/', getAllMovies)
router.get('/ratings', getMoviesAndRating)
router.get('/:id', getOneMovie)
router.get('/genres/:id', getAllMoviesForGenre)


module.exports = router; 