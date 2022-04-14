import React from 'react';
import { Preloader } from '../components/Preloader';
import { Movies } from '../components/Movies';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  };
  search_cb = (str, type = 'all') => {
    this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=The Godfather&plot=full`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <main className="container content">
        <Search search_movies={this.search_cb} />
        {!loading ? (
          <Movies movies={movies} />
        ) : (
          <h5>
            <Preloader />
          </h5>
        )}
      </main>
    );
  }
}
export { Main };
