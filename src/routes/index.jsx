import { useRoutes } from "react-router-dom";
import TestForm from "@/src/components/TestForm";
import HomePage from "@/src/pages/Home";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/react-hook-form",
      element: <TestForm />,
    },
    {
      path: "/pokemon",
      children: [
        {
          index: true,
          element: <div>pokemon</div>,
        },
        {
          path: ":name",
          element: <div>pokemon details</div>,
        },
      ],
    },
  ]);
  return routes;
};

export default Routes;
