/**
 * @name makePokemonRequestList
 * @description Makes a list of asynchronous requests to fetch information about pokemon.
 * @param {Array} evolutionChain The array containing objects with pokemon names.
 * @returns {Array} An array of promises, each resolving to an object representing a pokemon.
 */
const makePokemonRequestList = (evolutionChain) => {
  const pokemonRequestList = evolutionChain.map(async ({ url }) => {
    const id = url.split("/").reverse()[1];
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const response = await request.json();
    return {
      id: response.id,
      name: response.name,
      imgUrl: response.sprites.other["official-artwork"].front_default,
    };
  });
  return pokemonRequestList;
};

export default makePokemonRequestList;
