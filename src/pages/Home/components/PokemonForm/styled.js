import pxToRem from "@/src/utils/methods/pxToRem";
import styled from "@emotion/styled";

export const Container = styled.div`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: ${pxToRem(20)};
    gap: ${pxToRem(28)};
    background-color: ${theme.colors.white};
    width: ${pxToRem(400)};
    padding: ${pxToRem(69)} ${pxToRem(62)} ${pxToRem(69)} ${pxToRem(62)};
  `}
`;

export const Pokeball = styled.img`
  width: ${pxToRem(75)};
  height: ${pxToRem(75)};
  opacity: 50%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
