import React from "react";

export default function PokemonScore(props) {
  const hp = props.stats[0].base_stat;
  const attack = props.stats[1].base_stat;
  const defense = props.stats[2].base_stat;
  const specialAttack = props.stats[3].base_stat;
  const specialDefense = props.stats[4].base_stat;
  const speed = props.stats[5].base_stat;

  const total = Math.round(
    (attack +
      2 * specialAttack +
      3 * defense +
      specialDefense * hp +
      2 * speed) /
      10
  );

  return (
    <>
      {/*Spent a lot of time here trying to figure out how to loop through the array to do this calculation, ended up going this way.. Also no matter what I did couldn't seem to get my calculations to match the mock ups*/}
      <h3>Score : {total}</h3>
    </>
  );
}
