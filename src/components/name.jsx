import React from "react";
import styled from "styled-components";

const Name = styled.header`
  font-size: 24px;
  font-weight: 700;
`;

export default function PokemonName(props) {
  return (
    <>
      <Name>{props.name}</Name>
    </>
  );
}
