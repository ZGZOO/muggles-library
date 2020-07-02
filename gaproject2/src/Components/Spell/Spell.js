import React, { useState, useEffect } from "react";

function Spell(props) {
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

  let chosenSpell = [];
  let spellCard = null;
  if (spells.length !== 0) {
    chosenSpell = spells.filter((obj, index) => {
      return obj.spell === props.match.params.spell;
    });
    spellCard = chosenSpell.map((obj) => {
      return (
        <section key={obj._id}>
          <p>Spell: {obj.spell}</p>
          {obj.type === undefined ? <p></p> : <p>Type: {obj.type}</p>}
          {obj.effect === undefined ? <p></p> : <p>Effect: {obj.effect}</p>}
        </section>
      );
    });
  }

  return <>{spellCard}</>;
}

export default Spell;
