import React from "react";

export default function PokemonSprite(props) {
  return (
    <>
      <img src={props.sprite} alt={props.name} />
    </>
  );
}
