import Container from "@/src/pages/Layout/styled";
import PropTypes from "prop-types";

const Layout = ({ className, children }) => {
  return <Container className={className}>{children}</Container>;
};

Layout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Layout.defaultProps = {
  children: null,
  className: null,
};

export default Layout;
