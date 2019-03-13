const db = require('.')

const getAllMovies = (req, res, next) => {
    db.any('SELECT * FROM movies')
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

const getMovieswAvRating = ( req, res, next ) => {
db.any('SELECT movies.id, movies.title, movies.img_url, movie_ratings.movie_rating FROM movies JOIN')
    ('SELECT movie_id,  ROUND(AVG(ratings.stars), 2) AS movie_rating FROM ratings GROUP BY movie_id) AS movie_ratings ON movies.id = movie_ratings.movie_id')
}

module.exports = {
    getAllMovies, getOneMovie, getAllMoviesForGenre
}