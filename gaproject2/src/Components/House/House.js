import React, { useState, useEffect } from "react";

function House(props) {
  const [houses, setHouses] = useState([]);

  const apiUrl = "https://www.potterapi.com/v1/";
  const apiKey = `?key=$2a$10$${process.env.REACT_APP_API_KEY}`;
  const houseUrl = apiUrl + "houses" + apiKey;

  useEffect(() => {
    const makeApiCallHouses = async () => {
      const res = await fetch(houseUrl);
      const json = await res.json();
      setHouses(json);
    };
    makeApiCallHouses();
  }, [houseUrl]);

  let chosenHouse = [];
  let houseCard = null;
  if (houses.length !== 0) {
    chosenHouse = houses.filter((obj, index) => {
      return obj.name === props.match.params.house;
    });
    console.log("here here here", props.match.params.house);
    houseCard = chosenHouse.map((obj) => {
      return (
        <section key={obj._id}>
          <p>Name: {obj.name}</p>
          {obj.mascot === undefined ? <p></p> : <p>Mascot: {obj.mascot}</p>}
          {obj.headOfHouse === undefined ? (
            <p></p>
          ) : (
            <p>Head of House: {obj.headOfHouse}</p>
          )}
          {obj.houseGhost === undefined ? (
            <p></p>
          ) : (
            <p>House Ghost: {obj.houseGhost}</p>
          )}
          {obj.founder === undefined ? <p></p> : <p>Founder: {obj.founder}</p>}
          {obj.school === undefined ? <p></p> : <p>School: {obj.school}</p>}
          <p>
            Values: {obj.values[0]}, {obj.values[1]}, {obj.values[2]},
            {obj.values[3]}
          </p>
          <p>
            Colors: {obj.colors[0]}, {obj.colors[1]}
          </p>
        </section>
      );
    });
  }

  return <>{houseCard}</>;
}

export default House;
