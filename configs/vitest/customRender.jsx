import { render } from "@testing-library/react";
import IntegrationProvider from "@/configs/vitest/testUtils";

const renderWithIntegrationProvider = (children) =>
  render(<IntegrationProvider>{children}</IntegrationProvider>);

export default renderWithIntegrationProvider;
