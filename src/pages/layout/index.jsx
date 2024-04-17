import Container from "@/src/pages/layout/styled";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
