import React from "react";

function Search({search, setQuery, query}) {
  return (
    <div className="search">
      <input className="search-bar" type="text" placeholder="Search..." onChange={(e) => setQuery(e.target.value)} value={query} onKeyDown={search} />
    </div>
  );
}

export default Search;
