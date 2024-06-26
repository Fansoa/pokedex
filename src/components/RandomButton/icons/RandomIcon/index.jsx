import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";

const RandomIcon = ({ fillColor }) => {
  const theme = useTheme();

  return (
    <svg
      width="30"
      height="25"
      viewBox="0 0 30 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.4346 19.7022L23.2537 25V21.4676H22.2133C18.9285 21.4676 16.5097 19.9958 14.5129 18.0472C15.283 17.1407 15.9812 16.2282 16.6308 15.3745C16.78 15.1776 16.9282 14.9832 17.0762 14.7889C18.5535 16.3165 20.1424 17.347 22.2137 17.347H23.2541V14.4031L29.4346 19.7022ZM0 7.92758H3.08023C5.03354 7.92758 6.55767 8.84566 7.96378 10.2291C8.19518 9.93206 8.42917 9.62261 8.66535 9.31363C9.24029 8.55666 9.84806 7.75965 10.5066 6.96475C8.56223 5.14779 6.21633 3.80609 3.08031 3.80609H0V7.92758ZM23.2537 0V3.512H22.2133C16.777 3.512 13.7121 7.54141 11.0073 11.0977C8.57453 14.2908 6.47413 17.0523 3.08023 17.0523H0V21.1733H3.08023C8.51741 21.1733 11.5823 17.146 14.2871 13.5906C16.719 10.3936 18.8198 7.63255 22.2133 7.63255H23.2537V10.5977L29.4351 5.29824L23.2537 0Z"
        fill={fillColor || theme.colors.white}
      />
    </svg>
  );
};

RandomIcon.propTypes = {
  fillColor: PropTypes.string,
};

RandomIcon.defaultProps = {
  fillColor: null,
};

export default RandomIcon;
