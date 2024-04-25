import styled from "@emotion/styled";
import pxToRem from "@/src/utils/methods/pxToRem";
import Layout from "@/src/pages/Layout";

export const CustomLayout = styled(Layout)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const TopContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-top-left-radius: ${pxToRem(20)};
  border-top-right-radius: ${pxToRem(20)};
  width: ${pxToRem(1168)};
  height: ${pxToRem(120)};
  padding-right: ${pxToRem(42)};
  padding-left: ${pxToRem(42)};
`;

export const PokemonName = styled.div`
  ${({ theme }) => `
    color: ${theme.colors.darkSlateGray};
    font-size: ${pxToRem(30)};
    font-weight: bold;
    text-transform: capitalize;
  `}
`;

export const BottomContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: ${pxToRem(1)};
  background-color: rgba(255, 255, 255, 0.8);
  border-bottom-left-radius: ${pxToRem(20)};
  border-bottom-right-radius: ${pxToRem(20)};
  width: ${pxToRem(1168)};
  padding: ${pxToRem(42)};
  gap: ${pxToRem(42)};
`;

export const StatisticsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TypesContainer = styled.div`
  ${({ isMonoElem }) => `
    display: flex;
    justify-content: ${isMonoElem ? "center" : "space-around"};
  `}
`;

export const Illustration = styled.img`
  width: ${pxToRem(360)};
  height: ${pxToRem(360)};
`;
