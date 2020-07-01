import React, { useState, useEffect } from "react";

function Characters() {
  const [characters, setCharacters] = useState([]);

  const apiUrl = "https://www.potterapi.com/v1/";
  const apiKey = `?key=$2a$10$${process.env.REACT_APP_API_KEY}`;
  const characterUrl = apiUrl + "characters" + apiKey;

  useEffect(() => {
    const makeApiCallCharacters = async () => {
      const res = await fetch(characterUrl);
      const json = await res.json();
      setCharacters(json);
    };
    makeApiCallCharacters();
  }, [characterUrl]);

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

  return (
    <>
      <h1>Characters</h1>
      <div>{displayCharacters}</div>
    </>
  );
}

export default Characters;
