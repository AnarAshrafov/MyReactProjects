import React from "react";

class MovieCardCollapse extends React.Component {

    state = ({ showContent: true })

    showMore = () => {
        this.setState({ showContent: !this.state.showContent })
    }

    // componentDidMount() {

    // }

    // componentDidUpdate() {

    // }

    render() {
        return (
            <div>
                <button className="btn btn-primary w-100" onClick={this.showMore}>
                    {React.Children.map(this.props.children, children => children.props.movieTitle)}
                </button>
                {
                    this.state.showContent ? (
                        <div className="collapse show">
                            {React.Children.map(this.props.children, children => children)}
                        </div>
                    ) : null
                }

            </div>
        );
    }

};

export default MovieCardCollapse;