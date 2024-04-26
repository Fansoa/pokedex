import styled from "@emotion/styled";

const Container = styled.div`
  ${({ theme }) => `
    background: linear-gradient(
      180deg,
      ${theme.colors.sandyBrown} 0%,
      ${theme.colors.darkJungleGreen} 100%
    );
    min-height: 100vh;
    height: 100%;
    overflow: auto;
  `}
`;

export default Container;
