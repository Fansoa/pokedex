import styled from "@emotion/styled";
import pxToRem from "@/src/utils/methods/pxToRem";

const Container = styled.div`
  ${({ theme, type }) => `
    color: ${theme.colors.white};
    font-weight: bold;
    font-size: ${pxToRem(16)};
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${pxToRem(120)};
    height: ${pxToRem(60)};
    border-radius: ${pxToRem(20)};
    background-color: ${theme.typeTheme[type]};
  `}
`;

export default Container;
