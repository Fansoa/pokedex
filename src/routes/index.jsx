import { useRoutes } from "react-router-dom";
import TestForm from "@/src/components/TestForm";
import HomePage from "@/src/pages/Home";
import PokemonDetailsPage from "@/src/pages/PokemonDetails";

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
          element: <PokemonDetailsPage />,
        },
      ],
    },
  ]);
  return routes;
};

export default Routes;
