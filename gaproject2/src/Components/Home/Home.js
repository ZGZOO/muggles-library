import React, { useEffect, useState } from "react";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [houses, setHouses] = useState([]);
  const [spells, setSpells] = useState([]);

  const apiUrl = "https://www.potterapi.com/v1/";
  const apiKey = `?key=$2a$10$${process.env.REACT_APP_API_KEY}`;
  const characterUrl = apiUrl + "characters" + apiKey;
  const houseUrl = apiUrl + "houses" + apiKey;
  const spellUrl = apiUrl + "spells" + apiKey;

  // console.log("api key ", `${process.env.REACT_APP_API_KEY}`);

  useEffect(() => {
    const makeApiCallCharacters = async () => {
      const res = await fetch(characterUrl);
      const json = await res.json();
      setCharacters(json);
    };
    makeApiCallCharacters();
  }, [characterUrl]);

  useEffect(() => {
    const makeApiCallHouses = async () => {
      const res = await fetch(houseUrl);
      const json = await res.json();
      setHouses(json);
    };
    makeApiCallHouses();
  }, [houseUrl]);

  useEffect(() => {
    const makeApiCallSpells = async () => {
      const res = await fetch(spellUrl);
      const json = await res.json();
      setSpells(json);
    };
    makeApiCallSpells();
  }, [spellUrl]);

  let displayCharacters = <p>loading</p>;
  if (characters) {
    displayCharacters = characters.map((character, index) => {
      return (
        <section key={character._id}>
          <p>{character.name}</p>
        </section>
      );
    });
  }

  let displayHouses = <p>loading</p>;
  if (houses) {
    displayHouses = houses.map((house, index) => {
      return (
        <section key={house._id}>
          <p>{house.name}</p>
        </section>
      );
    });
  }

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
      <h1>Characters</h1>
      <div>{displayCharacters}</div>
      <h1>Hat</h1>
      <div>{displayHouses}</div>
      <h1>Spells</h1>
      <div>{displaySpells}</div>
    </>
  );
}

export default Home;
