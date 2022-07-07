import React from "react";
import { Card } from "react-bootstrap";
import "./styles/card.css";

export default function PokemonAbilities(props) {
  return (
    <>
      <Card className="abilitiesCard">
        <Card.Title className="cardTitle">Abilities</Card.Title>
        {props.abilities.map((ability, key) => (
          <Card.Body className="cardBody" key={key}>
            {ability.ability.name}
          </Card.Body>
        ))}
      </Card>
    </>
  );
}
