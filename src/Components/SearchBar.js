import React from "react";

function SearchBar({search, onSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search"></label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        // Add an enter button that initiates the search
      />
    </div>
  );
}

export default SearchBar;