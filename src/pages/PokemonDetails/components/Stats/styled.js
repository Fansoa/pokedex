import pxToRem from "@/src/utils/methods/pxToRem";
import styled from "@emotion/styled";

export const Container = styled.div`
  ${({ theme }) => `
    display: flex;
    width: fit-content;
    height: fit-content;
    padding: ${pxToRem(8)};
    background-color: ${theme.colors.silverSand};
  `}
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export const Case = styled.div`
  ${({ theme, isFilled }) => `
    width: ${pxToRem(55)};
    height: ${pxToRem(12)};
    border: ${pxToRem(1)} solid ${theme.colors.gainsboro};
    background-color: ${isFilled ? theme.colors.maximumBlue : theme.colors.white}
  `}
`;

export const Label = styled.p`
  ${({ theme }) => `
    color: ${theme.colors.darkSlateGray};
    font-size: ${pxToRem(14)};
    font-weight: bold;
    text-transform: capitalize;
    text-align: center;
    width: ${pxToRem(55)};
  `}
`;
