import React, { Component } from 'react';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  state = {
    movie: {},
  };

  async componentDidMount() {
    try {
      const result = await fetch(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }?api_key=29b9acf7ab2c27f191e212928ff4c160&language=en-US`,
      );
      const movie = await result.json();

      this.setState({
        movie,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { movie } = this.state;
    return (
      <div>
        <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title} />
        <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
        <h1>{this.state.movie.title}</h1>
        <h3>{this.state.movie.release_date}</h3>
        <p>{this.state.movie.overview}</p>
      </div>
    );
  }
}

export default MovieDetail;
