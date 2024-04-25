import styled from "@emotion/styled";
import pxToRem from "@/src/utils/methods/pxToRem";

export const PokemonId = styled.p`
  ${({ theme }) => `
    color: ${theme.colors.darkSlateGray};
    font-weight: bold;
    font-size: ${pxToRem(24)};
    text-align: center;
  `}
`;

export const PokemonName = styled.p`
  ${({ theme }) => `
    color: ${theme.colors.darkSlateGray};
    font-weight: bold;
    font-size: ${pxToRem(24)};
    text-align: center;
    text-transform: capitalize;
  `}
`;

export const PokemonIllustration = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${pxToRem(200)};
  height: ${pxToRem(200)};
`;

export const PokemonImage = styled.img`
  position: absolute;
  width: ${pxToRem(200)};
  height: ${pxToRem(200)};
`;

export const Pokeball = styled.img`
  width: ${pxToRem(100)};
  height: ${pxToRem(100)};
  opacity: 0.5;
`;
