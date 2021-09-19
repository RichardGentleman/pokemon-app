import React from "react";

import "./Card.css";

const Card = (props) => {
  const handleClick = (event) => {
    props.clickedButtonId(event.target.id);
  };

  const imgIdArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <div>
        {imgIdArray.map((imgId) => (
          <div className="card-wrapper">
            <img
              onClick={handleClick}
              className="card"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${imgId}.png`}
              alt="Pokemon"
              key={imgId}
              id={imgId}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
