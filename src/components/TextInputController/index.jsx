import TextInput from "@/src/components/TextInput";
import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";

const TextInputController = ({ label, name, ...props }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, formState: { errors } }) => (
        <TextInput
          type="text"
          onChange={onChange}
          value={value || ""}
          label={label}
          errorMessage={errors?.[name]?.message}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        />
      )}
    />
  );
};

TextInputController.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

TextInputController.defaultProps = {
  label: null,
};

export default TextInputController;
