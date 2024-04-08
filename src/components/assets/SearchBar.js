import React from "react";
import "../../App.css";
import search from "./searchicon.png";

function SearchBar() {
  return (
    <div className="searchbar">
      <text>SEARCH</text>
      <img src={search} alt="search" />
    </div>
  );
}

export default SearchBar;
