import pxToRem from "@/src/utils/methods/pxToRem";
import styled from "@emotion/styled";

export const Container = styled.div`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(24)};
    padding: ${pxToRem(16)};
    width: ${pxToRem(290)};
    height: fit-content;
    border-radius: ${pxToRem(20)};
    background-color: ${theme.colors.white};
  `}
`;

export const LabelInfoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Label = styled.p`
  ${({ theme }) => `
    color: ${theme.colors.darkSlateGray};
    font-size: ${pxToRem(14)};
    font-weight: bold;
  `}
`;

export const Info = styled.p`
  ${({ theme }) => `
    color: ${theme.colors.mandarin};
    font-size: ${pxToRem(14)};
    font-weight: bold;
  `}
`;

export const CustomInfo = styled(Info)`
  margin-left: ${pxToRem(8)};
  text-align: end;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(16)};
`;
