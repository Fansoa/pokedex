import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";

const TextInputController = ({ name, ...props }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, formState: { errors } }) => (
        <>
          <input
            type="text"
            onChange={onChange}
            value={value || ""}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
          />
          {errors?.[name]?.message}
        </>
      )}
    />
  );
};

TextInputController.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TextInputController;
