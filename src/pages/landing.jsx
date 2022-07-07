import React from "react";
import { useState } from "react";
import SearchBar from "../components/searchBar";
import { fetchPokemon } from "../services/getPokemon";
import PokemonAbilities from "../components/abilities";
import PokemonMoves from "../components/moves";
import PokemonStats from "../components/stats";
import PokemonName from "../components/name";
import PokemonSprite from "../components/sprite";
import styled from "styled-components";
import PokemonScore from "../components/score";

const MainContainer = styled.div`
  width: 1340px;
  height: 840px;
  background: rgba(255, 255, 255, 0.9);
  margin: auto;
  margin-top: 2.5rem;
`;

const TitleContainer = styled.div`
  text-align: center;
  padding-top: 2.4rem;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2.3rem;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: baseline;
`;

const NameContainer = styled.div`
  display: flex;
  margin-left: 11rem;
  padding-top: 4rem;
`;

const SpriteContainer = styled.div`
  display: flex;
  margin-left: 11rem;
  padding-top: 2rem;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ScoreContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const CardContainer = styled.div`
  padding-top: 3rem;
`;

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 5rem;
`;

export default function LandingPage() {
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [error, setError] = useState(false);
  const getPokemon = async (query) => {
    /* Account for nothing entered in the search bar*/
    if (!query) return setAlert(true);
    setError(false);
    setAlert(false);
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetchPokemon(query);
        const results = await response.json();
        setPokemon(results);
        setLoading(false);
      } catch (err) {
        /* Account for pokemon not found*/
        console.log("error");
        setLoading(false);
        setError(true);
      }
    }, 1500);
  };
  return (
    <>
      {/* Wanted to add a proper loading spinner/alert/error messages via bootstrap but did not have the time*/}

      <MainContainer>
        <TitleContainer>
          <h1>PokeViewer</h1>
        </TitleContainer>
        <SearchContainer>
          <SearchBar getPokemon={getPokemon} />
        </SearchContainer>
        {alert ? (
          <TitleContainer>
            <h1>You must enter a Pokemon</h1>
          </TitleContainer>
        ) : null}
        {error ? (
          <TitleContainer>
            <h1>Pokemon could not be found</h1>
          </TitleContainer>
        ) : null}
        {loading ? (
          <TitleContainer>
            <h1>Loading</h1>
          </TitleContainer>
        ) : null}
        {!loading && pokemon ? (
          <>
            <HorizontalContainer>
              <VerticalContainer>
                <RowContainer>
                  <NameContainer>
                    <PokemonName name={pokemon.name} />
                  </NameContainer>
                  <SpriteContainer>
                    <PokemonSprite sprite={pokemon.sprites.front_default} />
                  </SpriteContainer>
                </RowContainer>
                <StatsContainer>
                  <PokemonStats stats={pokemon.stats} />
                </StatsContainer>
                <ScoreContainer>
                  <PokemonScore stats={pokemon.stats} />
                </ScoreContainer>
              </VerticalContainer>
              <VerticalContainer>
                <CardContainer>
                  <PokemonMoves moves={pokemon.moves} />
                </CardContainer>
                <CardContainer>
                  <PokemonAbilities abilities={pokemon.abilities} />
                </CardContainer>
              </VerticalContainer>
            </HorizontalContainer>
          </>
        ) : null}
      </MainContainer>
    </>
  );
}
