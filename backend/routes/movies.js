let express=require('express')
let router = express.Router();
const { getAllMovies, getOneMovie, getAllMoviesForGenre } = require('../database/queries/movies')

router.get('/', getAllMovies)
router.get('/:id', getOneMovie)
router.get('/genres/:id', getAllMoviesForGenre)


module.exports = router; 