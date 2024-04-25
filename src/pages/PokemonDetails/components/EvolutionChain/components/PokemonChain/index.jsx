import {
  PokemonIllustration,
  Pokeball,
  PokemonImage,
  PokemonId,
  PokemonName,
} from "@/src/pages/PokemonDetails/components/EvolutionChain/components/PokemonChain/styled";
import pokeball from "@/src/assets/pokeball.png";
import PropTypes from "prop-types";
import ArrowIcon from "@/src/pages/PokemonDetails/components/EvolutionChain/icons/ArrowIcon";

const PokemonChain = ({ name, imgUrl, id, hasArrowIcon, type }) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <PokemonIllustration>
          <Pokeball src={pokeball} />
          <PokemonImage src={imgUrl} alt={`${name} - illustration`} />
        </PokemonIllustration>
        <PokemonId>#{id}</PokemonId>
        <PokemonName>{name}</PokemonName>
      </div>
      {hasArrowIcon && <ArrowIcon type={type} />}
    </>
  );
};

PokemonChain.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  imgUrl: PropTypes.string,
  hasArrowIcon: PropTypes.bool,
  type: PropTypes.oneOf([
    "normal",
    "fire",
    "water",
    "grass",
    "electric",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dark",
    "dragon",
    "steel",
    "fairy",
  ]),
};

PokemonChain.defaultProps = {
  id: null,
  name: null,
  imgUrl: null,
  hasArrowIcon: null,
  type: null,
};

export default PokemonChain;
