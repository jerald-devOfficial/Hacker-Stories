import React from 'react';

import InputWithLabel from './InputWithLabel';

const SearchForm = ({ searchTerm, onSearchInput, onSearchSubmit }) => (
  <form onSubmit={onSearchSubmit} className="search-form">
    <InputWithLabel id="search" isFocused onInputChange={onSearchInput} value={searchTerm}>
      <strong>Search: </strong>
    </InputWithLabel>

    <button className="button button_large" type="submit" disabled={!searchTerm}>
      Submit
    </button>
  </form>
);

export default SearchForm;
