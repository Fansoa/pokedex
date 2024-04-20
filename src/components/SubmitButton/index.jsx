import Button from "@/src/components/SubmitButton/styled";
import PropTypes from "prop-types";

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
