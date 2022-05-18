import React from "react";
//import SearchBar from "./SearchBar";
import MovieList from "./MovieList";


class App extends React.Component {

    state = {
        movies: [
            {
                "id": 1,
                "name": "The Godfather",
                "rating": 9.2,
                "overview": "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
                "imageURL": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
            },
            {
                "id": 2,
                "name": "The Dark Knight",
                "rating": 9.0,
                "overview": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
                "imageURL": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
            },
            {
                "id": 3,
                "name": "Inception",
                "rating": 8.7,
                "overview": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
                "imageURL": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg"
            },
            {
                "id": 4,
                "name": "The Matrix",
                "rating": 8.7,
                "overview": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
                "imageURL": "https://d2iltjk184xms5.cloudfront.net/uploads/photo/file/403236/7f1d472f443436f65454f14699eaaf01-Matrix.jpg"
            },
        ]
    }

    deleteMovie = (movie) => {
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );

        this.setState({
            movies: newMovieList
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">

                    </div>
                </div>
                <MovieList
                    movies={this.state.movies}
                    deleteMovieProp={this.deleteMovie} />
            </div>
        )
    }
}

export default App;