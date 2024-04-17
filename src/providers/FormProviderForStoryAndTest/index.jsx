import { FormProvider, useForm } from "react-hook-form";
import PropTypes from "prop-types";

const FormProviderForStoryAndTest = ({ children }) => {
  const methods = useForm();
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormProvider {...methods}>{children}</FormProvider>
  );
};

FormProviderForStoryAndTest.propTypes = {
  children: PropTypes.node,
};

FormProviderForStoryAndTest.defaultProps = {
  children: null,
};

export default FormProviderForStoryAndTest;
