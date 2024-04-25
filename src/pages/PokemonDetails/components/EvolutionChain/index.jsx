import Container from "@/src/pages/PokemonDetails/components/EvolutionChain/styled";
import PropTypes from "prop-types";
import PokemonChain from "@/src/pages/PokemonDetails/components/EvolutionChain/components/PokemonChain";

const EvolutionChain = ({ pokemonList, type }) => {
  return (
    <Container>
      {pokemonList.map(({ id, name, imgUrl }, i) => (
        <PokemonChain
          id={id}
          name={name}
          imgUrl={imgUrl}
          key={`chain-pokemon-${name}`}
          type={type}
          hasArrowIcon={pokemonList.length !== i + 1}
        />
      ))}
    </Container>
  );
};

EvolutionChain.propTypes = {
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      imgUrl: PropTypes.string,
    }),
  ),
  type: PropTypes.string,
};

EvolutionChain.defaultProps = {
  pokemonList: null,
  type: null,
};

export default EvolutionChain;
