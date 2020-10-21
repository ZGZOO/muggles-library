import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Houses.css";

function Houses() {
  const [houses, setHouses] = useState([]);

  const apiUrl = "https://www.potterapi.com/v1/";
  const apiKey = `?key=$2a$10$.HOxizQG3kYLYIn.aIdRFuXbB/ic211QqT0B/H7qTXAZEfx8gEUHq`;
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
        <p key={house._id} className="house">
          <Link to={"/houses/" + house.name}>{house.name}</Link>
        </p>
      );
    });
  }

  return (
    <div className="houses">
      <h1>Houses</h1>
      <div>{displayHouses}</div>
    </div>
  );
}

export default Houses;
