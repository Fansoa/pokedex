import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import testSchema from "@/src/components/TestForm/yupSchema";

const useTestForm = () => {
  const methods = useForm({
    resolver: yupResolver(testSchema),
  });

  const onSubmit = (data) => console.log(data);

  return { methods, onSubmit: methods.handleSubmit(onSubmit) };
};

export default useTestForm;
