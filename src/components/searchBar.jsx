import React, { useState } from "react";
import { ReactComponent as Search } from "../assets/search.svg";
import styled from "styled-components";

const StyledInput = styled.input`
  margin-right: 2.4rem;
  width: 56rem;
  font-size: 24px;
  font-weight: 400;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function SearchBar(props) {
  const [search, setSearch] = useState("");

  return (
    <>
      <Container>
        {/*onChange updates the value of the state every time a user types, add onClick event to Search Icon that calls the function that makes the http call */}
        <StyledInput
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for Pokemon (lowercase only)"
        />
        <Search onClick={(e) => props.getPokemon(search)} />
      </Container>
    </>
  );
}
