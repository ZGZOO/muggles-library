import React, { useState, useEffect } from "react";

function Spells() {
  const [spells, setSpells] = useState([]);

  const apiUrl = "https://www.potterapi.com/v1/";
  const apiKey = `?key=$2a$10$${process.env.REACT_APP_API_KEY}`;

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
        <section key={spell._id}>
          <p>{spell.spell}</p>
        </section>
      );
    });
  }

  return (
    <>
      <h1>Spells</h1>
      <div>{displaySpells}</div>
    </>
  );
}

export default Spells;
