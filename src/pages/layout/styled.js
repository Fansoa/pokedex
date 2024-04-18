import styled from "@emotion/styled";
import global from "@/src/theme/global";

const Container = styled.div`
  background: linear-gradient(
    180deg,
    ${global.colors.sandyBrown} 0%,
    ${global.colors.darkSlateGray} 100%
  );
  min-height: 100vh;
  height: 100%;
`;

export default Container;
