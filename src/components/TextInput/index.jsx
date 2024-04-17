import PropTypes from "prop-types";

const TextInput = ({ onChange, value, name, ...props }) => {
  return (
    <input
      name={name}
      onChange={onChange}
      type="text"
      value={value}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};

TextInput.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

TextInput.defaultProps = {
  name: undefined,
  onChange: undefined,
  value: undefined,
};

export default TextInput;
