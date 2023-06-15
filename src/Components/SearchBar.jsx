import React, { useState } from "react";


const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <div className="searchBar">
      <form className="search" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
        />
        <button type="submit">
          <img src="./images/search.png" alt="Search" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
