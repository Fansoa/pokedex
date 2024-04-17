import { ThemeProvider } from "@emotion/react";
import PropTypes from "prop-types";
import theme from "@/src/theme/theme";

const IntegrationProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

IntegrationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IntegrationProvider;
