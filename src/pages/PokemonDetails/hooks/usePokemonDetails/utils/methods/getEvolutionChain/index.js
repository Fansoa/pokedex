/**
 * @name getEvolutionChain
 * @description Retrieves the evolution chain of a pokemon species.
 * @param {Object} chain The evolution chain object.
 * @returns {Array} An array of object containing the names and urls of the species of each pokemon in the evolution chain.
 */

const getEvolutionChain = (chain) => {
  let evolutionChain;
  const browseEvolutionChain = (current, accumulator) => {
    evolutionChain = accumulator || [current.species];

    if (accumulator) {
      evolutionChain = [...accumulator, current.species];
    }

    if (current.evolves_to.length !== 0) {
      browseEvolutionChain(current.evolves_to[0], evolutionChain);
    }
  };

  browseEvolutionChain(chain);
  return evolutionChain;
};

export default getEvolutionChain;
