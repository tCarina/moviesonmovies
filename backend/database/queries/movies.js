const db = require('.')

const getAllMovies = (req, res, next) => {
    db.any('SELECT movies.id AS movie_id, title, img_url, genre_id, AVG(stars), ROUND(stars, 0), catergory, genres.id FROM movies JOIN genres ON movies.genre_id = genres.id JOIN ratings ON ratings.movie_id = movies.id GROUP BY movies.id, genres.catergory, genres.id, ratings.stars')
    .then(movies  =>  {
        res.status(200)
        .json({
            status: 'Success', 
            message: 'Got all movies', 
            movies: movies
        })
    })
    .catch(err => {
        res.status(400)
        .json({
            status: 'Failure', 
            message: 'Failed. Make another request. '
        })
        next(err);
    })
}

const getOneMovie = (req, res, next) => {
    db.one('SELECT * FROM movies WHERE id=${id}',
        {id: req.params.id})
        .then(movie => {
            res.status(200)
            .json({
                status: 'Success', 
                message: 'Retrieved movie.', 
                movie: movie
            })
        })
        .catch(err => {
            res.status(400)
            .json({
                status: 'Failure', 
                message: 'Failed. Make another request.'
            })
            next(err)
        })
    }


    const getAllMoviesForGenre = (req, res, next ) => {
        db.any('SELECT * FROM movies WHERE genre_id=${id}', {
            id: Number(req.params.id)
        })
        .then( genreMovies => {
            res.status(200)
            .json({
                status: 'Success.',
                message: 'All movies in this genre.', 
                movies: genreMovies
            })
        })
        .catch( err => {
            res.status(400)
            .json({
                status: 'Failure.',
                message: 'Failed. Try again.'
        
            })
            next(err)
        })
    }

const getMoviesAndRating = ( req, res, next ) => {
db.any(`SELECT movies.id, movies.title, movies.img_url, movie_ratings.movie_rating FROM movies JOIN (SELECT movie_id,  ROUND(AVG(ratings.stars), 2) AS movie_rating FROM ratings GROUP BY movie_id) AS movie_ratings ON movies.id = movie_ratings.movie_id`)
    .then(movsAndRats => {
        res.status(200)
        .json({
            status: 'Success', 
            message: 'All movies with ratings.',
            movies: movsAndRats
        })
    })
    .catch(err => {
        res.status(400)
        .json({
            status: 'Failure', 
            message: 'Failed. Try again'
        })
        next(err)
    })
}

module.exports = {
    getAllMovies, getOneMovie, getAllMoviesForGenre, getMoviesAndRating
}