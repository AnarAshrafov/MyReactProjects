import React from "react";
import PropTypes from "prop-types";

class MovieCard extends React.Component {
    render() {
        return (
            <div className="card w-100">
                <img className="card-img-top" src={this.props.movieImage} alt="Movie Image" width="180" height="450" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.movieTitle}</h5>
                    <p className="card-text">{this.props.movieDirector}</p>
                    <p className="card-text">{this.props.movieReleaseYear}</p>
                    <p className="card-text">{this.props.moviePrice}</p>
                </div>
            </div>
        );
    }
}

MovieCard.defaultProps = {
    movieTitle : "Default Movie Title"
}

MovieCard.propTypes = {
movieDirector: PropTypes.string
}
export default MovieCard;