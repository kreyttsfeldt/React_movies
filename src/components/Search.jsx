import React, { useState } from 'react';

const Search = (props) => {
  const { search_movies = Function.prototype } = props;
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      search_movies(search, type);
    }
  };

  const handle_filter = (event) => {
    setType(event.target.dataset.type);
    search_movies(search, event.target.dataset.type);
  };
  return (
    <div className="row">
      <div className="input-field">
        <input
          placeholder="Search"
          type="search"
          id="email_inline"
          className="validate"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className="btn search-btn"
          onClick={() => search_movies(search, type)}
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
            checked={type === 'all'}
            onChange={handle_filter}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="movie"
            onChange={handle_filter}
            checked={type === 'movie'}
          />
          <span>Movies</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="series"
            onChange={handle_filter}
            checked={type === 'series'}
          />
          <span>Series</span>
        </label>
      </p>
    </div>
  );
};
export { Search };
