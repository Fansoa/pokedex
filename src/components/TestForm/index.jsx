import useTestForm from "@/src/components/TestForm/hooks/useTestForm";
import TextInputController from "@/src/components/TextInputController";
import { FormProvider } from "react-hook-form";

const TestForm = () => {
  const { methods, onSubmit } = useTestForm();

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <TextInputController
          control={methods.control}
          name="test"
          placeholder="Placeholder"
        />
        <input type="submit" />
      </form>
    </FormProvider>
  );
};

// TestForm.propTypes = {};

export default TestForm;
