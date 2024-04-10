import React from "react";
import "../../App.css";
import search from "./searchicon.png";

function SearchBar() {
  return (
    <div className="searchbar">
      <input type="text" placeholder="SEARCH" />
      <button type="submit" className="buttonsearch">
        <img src={search} alt="Search" />
      </button>
    </div>
  );
}

export default SearchBar;
