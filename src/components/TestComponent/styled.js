import styled from "@emotion/styled";

const Container = styled.div`
  ${({ theme, variant }) => `
    background-color: ${theme.testComponentTheme[variant].backgroundColor}
  `}
`;

export default Container;
