import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  const returnStringWithoutSpace = (word) => {
    return word.split(" ").join("");
  };

  let displayCharacters = <p>loading</p>;
  if (characters) {
    displayCharacters = characters.map((character, index) => {
      return (
        <section key={character._id}>
          <p>
            <Link
              to={"/characters/" + returnStringWithoutSpace(character.name)}
            >
              {character.name}
            </Link>
          </p>
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
