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
    // console.log("final search is", search);
  };

  // const searchIcon = <i class="fas fa-search"></i>;

  return (
    <div className="header">
      <h1>Muggles' Library</h1>
      <form onSubmit={handleSubmit}>
        {/* drop down button with hat, character, spell */}
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="search characters, houses, spells.."
          className="input"
        />
        <input type="submit" value="search" className="search" />
      </form>
    </div>
  );
}

export default Header;
