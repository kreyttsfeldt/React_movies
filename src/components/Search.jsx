import React from 'react';

class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  };

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.search_movies(this.state.search, this.state.type);
    }
  };

  handle_filter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.search_movies(this.state.search, this.state.type);
      }
    );
  };
  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            placeholder="Search"
            type="search"
            id="email_inline"
            className="validate"
            value={this.state.search}
            onChange={(event) => this.setState({ search: event.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn search-btn"
            onClick={() =>
              this.props.search_movies(this.state.search, this.state.type)
            }
          >
            Search
          </button>
        </div>

        <p>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="all"
              checked={this.state.type === 'all'}
              onChange={this.handle_filter}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={this.handle_filter}
              checked={this.state.type === 'movie'}
            />
            <span>Movies</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={this.handle_filter}
              checked={this.state.type === 'series'}
            />
            <span>Series</span>
          </label>
        </p>
      </div>
    );
  }
}
export { Search };
