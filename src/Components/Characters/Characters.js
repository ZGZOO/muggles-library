import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Characters.css";

function Characters() {
  const [characters, setCharacters] = useState([]);

  const apiUrl = "https://www.potterapi.com/v1/";
  const apiKey = `${process.env.REACT_APP_API_KEY}`;
  const characterUrl = apiUrl + "characters" + "?key=$2a$10$" + apiKey;
  console.log("API: ", apiKey);

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
        <p key={character._id} className="person">
          <Link to={"/characters/" + returnStringWithoutSpace(character.name)}>
            {character.name}
          </Link>
        </p>
      );
    });
  }

  return (
    <div className="characters">
      <h1>Characters</h1>
      <div>{displayCharacters}</div>
    </div>
  );
}

export default Characters;
