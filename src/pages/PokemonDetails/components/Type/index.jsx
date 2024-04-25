import Container from "@/src/pages/PokemonDetails/components/Type/styled";
import PropTypes from "prop-types";

const Type = ({ type }) => {
  return <Container type={type}>{type}</Container>;
};

Type.propTypes = {
  type: PropTypes.oneOf([
    "normal",
    "fire",
    "water",
    "grass",
    "electric",
    "ice",
    "fight",
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

Type.defaultProps = {
  type: "normal",
};
export default Type;
