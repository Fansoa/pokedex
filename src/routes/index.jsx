import { useRoutes } from "react-router-dom";
import TestComponent from "@/src/components/TestComponent";
import TestForm from "@/src/components/TestForm";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <TestComponent />,
    },
    {
      path: "/react-hook-form",
      element: <TestForm />,
    },
  ]);
  return routes;
};

export default Routes;
