import { useTheme } from "@emotion/react";
import PropTypes from "prop-types";

const BackIcon = ({ fillColor }) => {
  const theme = useTheme();

  return (
    <svg
      width="24"
      height="40"
      viewBox="0 0 24 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.1285 17.1575C1.33154 16.9551 1.55179 16.7844 1.78353 16.6359L17.2862 1.13393C18.7986 -0.377738 21.2523 -0.378455 22.7654 1.13465C24.2785 2.64703 24.2785 5.1 22.7654 6.61381L9.41433 19.9648L22.8342 33.3855C24.3473 34.8979 24.3473 37.3501 22.8342 38.8646C22.0773 39.6223 21.0851 39.9996 20.095 39.9996C19.1049 39.9996 18.112 39.6223 17.3558 38.8646L1.78353 23.2909C1.55179 23.1424 1.3301 22.9717 1.1285 22.7694C0.355086 21.9959 -0.0179876 20.9772 0.000666088 19.9634C-0.0179876 18.9497 0.355086 17.9316 1.1285 17.1575Z"
        fill={fillColor || theme.colors.darkSlateGray}
      />
    </svg>
  );
};

BackIcon.propTypes = {
  fillColor: PropTypes.string,
};

BackIcon.defaultProps = {
  fillColor: null,
};

export default BackIcon;
