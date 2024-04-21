import RandomIcon from "@/src/components/RandomButton/icons/RandomIcon";
import Button from "@/src/components/RandomButton/styled";
import PropTypes from "prop-types";

const RandomButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <RandomIcon />
    </Button>
  );
};

RandomButton.propTypes = {
  onClick: PropTypes.func,
};

RandomButton.defaultProps = {
  onClick: null,
};

export default RandomButton;
