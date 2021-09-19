import React, { useState } from "react";
import Card from "./components/Card";

import "./App.css";

function App() {
  const [chosenItemId, setChosenItemId] = useState(2);
  const [pokemonName, setPokemonName] = useState();
  const [pokemonImg, setPokemonImg] = useState();

  const itemIdHandler = (chosenIdNumber) => {
    setChosenItemId(chosenIdNumber);
  };

  fetch(`https://pokeapi.co/api/v2/pokemon/${chosenItemId}?`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setPokemonName(data.forms[0].name.toUpperCase());
      setPokemonImg(data.sprites.other["official-artwork"].front_default);
    });

  return (
    <div className="App">
      <h1 className="heading heading-large">Pokémon World</h1>
      <div>
        <h2 className="heading heading-small">{pokemonName}</h2>
        <div>
          <img src={pokemonImg} className="img-main" alt="Pokemon" />
        </div>
      </div>
      <div className="row">
        <Card clickedButtonId={itemIdHandler} />
      </div>
    </div>
  );
}

export default App;
