import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    // console.log(event.target.value);
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch("");
    console.log("final search is", search);
  };

  return (
    <div className="header">
      <h1>Muggles' Library</h1>
      <form onSubmit={handleSubmit} autoComplete="on">
        <input
          type="search"
          value={search}
          onChange={handleSearchChange}
          placeholder="search characters, houses, spells.."
          className="input"
          autoComplete="on"
        />
        <input type="submit" value="       " className="search" />
      </form>
    </div>
  );
}

export default Header;
