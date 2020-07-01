import React, { useState, useEffect } from "react";

function Houses() {
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

  return (
    <>
      <h1>Houses</h1>
      <div>{displayHouses}</div>
    </>
  );
}

export default Houses;
