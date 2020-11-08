import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <div className="form-wrapper">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          onChange={handleChange}
          placeholder="Search for a city"
        />
        <button type="submit" id="submit" className="search-button">
          <p>Search</p>
        </button>
      </form>
    </div>
  );
};

export default Search;
