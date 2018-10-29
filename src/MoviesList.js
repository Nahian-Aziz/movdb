import React, { Component } from 'react';

import Movie from './Movie';

class MoviesList extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    try {
      const result = await fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=29b9acf7ab2c27f191e212928ff4c160&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
      );
      const movies = await result.json();

      this.setState({
        movies: movies.results,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        {this.state.movies.map(movie => (
          <Movie key={movie.title} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MoviesList;
