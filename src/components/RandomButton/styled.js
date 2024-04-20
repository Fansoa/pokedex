import styled from "@emotion/styled";
import pxToRem from "@/src/utils/methods/pxToRem";

const Button = styled.button`
  ${({ theme }) => `
    background-color: ${theme.colors.sandyBrown};
    width: ${pxToRem(65)};
    height: ${pxToRem(65)};
    border-radius: ${pxToRem(80)};
    color: ${theme.colors.white};
  `}
`;

export default Button;
