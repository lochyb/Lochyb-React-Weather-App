import React, { useState } from "react";

const SearchForm = ({ getCity }) => {
  const [city, setCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    getCity(city);
  }
  return (
    <div className="searchDiv">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        ></input>
        <button type="submit" className="btn btn-success">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
