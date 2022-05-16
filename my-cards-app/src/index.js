import React from 'react';
import ReactDOM from 'react-dom';
import MovieCard from './components/MovieCard';
import MovieCardCollapse from './components/MovieCardCollapse';

const App = () => {
    return (
        <div className="container">
            <div className='row'>
                <div className="card-group w-100">
                    <div className='col'>
                        <MovieCardCollapse href="collapseExample1">
                            <MovieCard movieTitle="Pulp Fiction"
                                movieDirector="Director: Quentin Tarantino"
                                movieReleaseYear="Release Year: 1994"
                                moviePrice="Price: 3.99 $"
                                movieImage="https://d2iltjk184xms5.cloudfront.net/uploads/photo/file/2212/original.jpg" />
                        </MovieCardCollapse>
                    </div>
                    <div className='col'>
                        <MovieCardCollapse href="collapseExample2">
                            <MovieCard movieTitle="Star Wars"
                                movieDirector="Director: George Lucas"
                                movieReleaseYear="Release Year: 1977"
                                moviePrice="Price: 2.99 $"
                                movieImage="https://m.media-amazon.com/images/M/MV5BNzg4MjQxNTQtZmI5My00YjMwLWJlMjUtMmJlY2U2ZWFlNzY1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg" />
                        </MovieCardCollapse>
                    </div>
                    <div className='col'>
                        <MovieCardCollapse href="collapseExample3">
                            <MovieCard movieTitle="12 Angry Men"
                                movieDirector="Director: Sidney Lumet"
                                movieReleaseYear="Release Year: 1957"
                                moviePrice="Price: 1.99 $"
                                movieImage="https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg" />
                        </MovieCardCollapse>
                    </div>
                    <div className='col'>
                        <MovieCardCollapse href="collapseExample4">
                            <MovieCard movieTitle="Fight Club"
                                movieDirector="Director: David Fincher"
                                movieReleaseYear="Release Year: 1999"
                                moviePrice="Price: 3.99 $"
                                movieImage="https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg" />
                        </MovieCardCollapse>
                    </div>
                </div>
            </div>
        </div>
    );

}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);