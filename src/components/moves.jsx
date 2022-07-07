import React from "react";
import { Card } from "react-bootstrap";
import "./styles/card.css";

export default function PokemonMoves(props) {
  return (
    <>
      <Card className="movesCard">
        <Card.Title className="cardTitle">Moves</Card.Title>
        {props.moves.map((move, key) => (
          <Card.Body className="cardBody" key={key}>
            {move.move.name}
          </Card.Body>
        ))}
      </Card>
    </>
  );
}
