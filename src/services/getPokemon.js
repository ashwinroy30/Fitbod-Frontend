const baseUrl = "http://pokeapi.co/api/v2/pokemon";

export async function fetchPokemon(pokemon) {
  return fetch(`${baseUrl}/${pokemon}`);
}
