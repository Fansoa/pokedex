import PropTypes from "prop-types";
import Button from "@/src/components/SubmitButton/styled";

const SubmitButton = ({ onClick, label }) => {
  return <Button onClick={onClick}>{label}</Button>;
};

SubmitButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

SubmitButton.defaultProps = {
  label: null,
  onClick: null,
};

export default SubmitButton;
