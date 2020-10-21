import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Spells.css";

function Spells() {
  const [spells, setSpells] = useState([]);

  const apiUrl = "https://www.potterapi.com/v1/";
  const apiKey = `?key=$2a$10$.HOxizQG3kYLYIn.aIdRFuXbB/ic211QqT0B/H7qTXAZEfx8gEUHq`;

  const spellUrl = apiUrl + "spells" + apiKey;

  useEffect(() => {
    const makeApiCallSpells = async () => {
      const res = await fetch(spellUrl);
      const json = await res.json();
      setSpells(json);
    };
    makeApiCallSpells();
  }, [spellUrl]);

  let displaySpells = <p>loading</p>;
  if (spells) {
    displaySpells = spells.map((spell, index) => {
      return (
        <p key={spell._id} className="spell">
          <Link to={"/spells/" + spell.spell}>{spell.spell}</Link>
        </p>
      );
    });
  }

  return (
    <div className="spells">
      <h1>Spells</h1>
      <div>{displaySpells}</div>
    </div>
  );
}

export default Spells;
