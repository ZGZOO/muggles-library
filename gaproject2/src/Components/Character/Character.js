import React, { useState, useEffect } from "react";
import "./Character.css";

function Character(props) {
  const apiUrl = "https://www.potterapi.com/v1/";
  const apiKey = `?key=$2a$10$${process.env.REACT_APP_API_KEY}`;
  const characterUrl = apiUrl + "characters" + apiKey;

  const [characters, setCharacters] = useState([]);
  // const [ministryOfMagic, setMinistryOfMagic] = useState(false);
  // const [orderOfThePhoenix, setOrderOfThePhoenix] = useState(false);
  // const [dumbledoresArmy, setDumbledoresArmy] = useState(false);
  // const [deathEater, setDeathEater] = useState(false);

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

  let chosenCharacters = [];
  let personCard = null;
  if (characters.length !== 0) {
    chosenCharacters = characters.filter((obj, index) => {
      return returnStringWithoutSpace(obj.name) === props.match.params.name;
    });
    personCard = chosenCharacters.map((obj) => {
      return (
        <section key={obj._id} className="personCard">
          <div>
            <p>Name: {obj.name}</p>
            {obj.role === undefined ? "" : <p>Role: {obj.role}</p>}
            {obj.house === undefined ? "" : <p>House: {obj.house}</p>}
            {obj.school === undefined ? "" : <p>School: {obj.school}</p>}
            {obj.bloodStatus === undefined ? (
              ""
            ) : (
              <p>Blood Status: {obj.bloodStatus}</p>
            )}
            {obj.species === undefined ? "" : <p>Species: {obj.species}</p>}
            {obj.boggart === undefined ? "" : <p>Boggart: {obj.boggart}</p>}
            {obj.alias === undefined ? "" : <p>Alias: {obj.alias}</p>}
            {obj.wand === undefined ? "" : <p>Wand: {obj.wand}</p>}
            {obj.patronus === undefined ? "" : <p>Patronus: {obj.patronus}</p>}
          </div>
        </section>
      );
    });
  }

  return <div className="canvas">{personCard}</div>;
}

export default Character;
