import COLOR_BY_TYPE from "@/src/pages/PokemonDetails/components/EvolutionChain/icons/ArrowIcon/constants/COLOR_BY_TYPE";
import PropTypes from "prop-types";

const ArrowIcon = ({ type }) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M96.0933 40.57L69.4266 13.9033C64.2333 8.70334 55.7666 8.70334 50.5733 13.9033C48.0533 16.4167 46.6666 19.77 46.6666 23.33C46.6666 26.89 48.0533 30.2433 50.5733 32.7567L67.8133 49.9967L50.5733 67.2367C48.0533 69.7567 46.6666 73.1033 46.6666 76.6633C46.6666 80.2233 48.0533 83.57 50.5733 86.09C53.0933 88.61 56.44 89.9967 60 89.9967C63.56 89.9967 66.9066 88.61 69.4266 86.09L96.0933 59.4233C98.6133 56.91 100 53.5567 100 49.9967C100 46.4367 98.6133 43.0833 96.0933 40.57ZM91.38 54.71L64.7133 81.3767C62.1866 83.8967 57.8133 83.8967 55.2866 81.3767C52.6866 78.7767 52.6866 74.55 55.2866 71.95L77.24 49.9967L55.2866 28.0433C54.0266 26.7833 53.3333 25.11 53.3333 23.33C53.3333 21.55 54.0266 19.8767 55.2866 18.6167C56.5866 17.3167 58.2933 16.6633 60 16.6633C61.7066 16.6633 63.4133 17.3167 64.7133 18.61L91.38 45.2767C92.64 46.5433 93.3333 48.2167 93.3333 49.9967C93.3333 51.7767 92.64 53.45 91.38 54.71Z"
        fill={COLOR_BY_TYPE[type]}
      />
      <path
        d="M49.4267 40.57L22.76 13.9033C17.5667 8.70334 9.1 8.70334 3.90667 13.9033C1.38667 16.4167 0 19.77 0 23.33C0 26.89 1.38667 30.2433 3.90667 32.7567L21.1467 49.9967L3.90667 67.2367C1.38667 69.7567 0 73.1033 0 76.6633C0 80.2233 1.38667 83.57 3.90667 86.09C6.42667 88.61 9.77333 89.9967 13.3333 89.9967C16.8933 89.9967 20.24 88.61 22.76 86.09L49.4267 59.4233C51.9467 56.91 53.3333 53.5567 53.3333 49.9967C53.3333 46.4367 51.9467 43.0833 49.4267 40.57ZM44.7133 54.71L18.0467 81.3767C15.52 83.8967 11.1467 83.8967 8.62 81.3767C6.02 78.7767 6.02 74.55 8.62 71.95L30.5733 49.9967L8.62 28.0433C7.36 26.7833 6.66667 25.11 6.66667 23.33C6.66667 21.55 7.36 19.8767 8.62 18.6167C9.92 17.3167 11.6267 16.6633 13.3333 16.6633C15.04 16.6633 16.7467 17.3167 18.0467 18.61L44.7133 45.2767C45.9733 46.5433 46.6667 48.2167 46.6667 49.9967C46.6667 51.7767 45.9733 53.45 44.7133 54.71Z"
        fill={COLOR_BY_TYPE[type]}
      />
    </svg>
  );
};

ArrowIcon.propTypes = {
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

ArrowIcon.defaultProps = {
  type: "normal",
};

export default ArrowIcon;
