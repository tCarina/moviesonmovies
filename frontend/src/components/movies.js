import React, {Component} from 'react'; 
import Axios from 'axios'; 
import '../css/movies.css'

class AllMovies extends Component {
    constructor() {
        super()
        this.state = {
            allMovies : []
        }
    }

    componentDidMount() {
        Axios.get('/movies')
        .then(res => {
            console.log(this.data);
            
            this.setState({
                allMovies: res.data.movies
            })
        })
        .catch(err => {
            console.log(err);
            
        })
    }
    displayAllMovies = () => {
        const showMovies =  this.state.allMovies.map(movies => {
            return (
                <div className ='feed'>
                <div key ={movies.movie_id}>
                <h1>Title: {movies.title}</h1>
                <img className ='moviePoster' src ={movies.img_url} alt=''/>
                <h2>Genre: {movies.catergory}</h2>
                <h2>Rating: {movies.round} Stars </h2>
                </div>
                </div>
            );
        })
        return showMovies;
    }
render() {
    return (
        <>
        <div className='movieinfo'>
        {this.displayAllMovies()}
        </div>
        </>
    )
    }
}

export default AllMovies