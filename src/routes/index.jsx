import { useRoutes } from "react-router-dom";
import TestComponent from "@/src/components/TestComponent";
import TestForm from "@/src/components/TestForm";
import Layout from "@/src/pages/layout";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <Layout>
          <TestComponent />
        </Layout>
      ),
    },
    {
      path: "/react-hook-form",
      element: <TestForm />,
    },
  ]);
  return routes;
};

export default Routes;
