import {
  Container,
  ErrorMessage,
  Input,
  Label,
} from "@/src/components/TextInput/styled";
import PropTypes from "prop-types";

const TextInput = ({
  label,
  errorMessage,
  onChange,
  value,
  name,
  ...props
}) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Input
        name={name}
        onChange={onChange}
        type="text"
        value={value}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

TextInput.defaultProps = {
  label: null,
  errorMessage: null,
  name: null,
  onChange: null,
  value: null,
};

export default TextInput;
