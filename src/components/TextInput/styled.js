import styled from "@emotion/styled";
import global from "@/src/theme/global";
import pxToRem from "@/src/utils/methods/pxToRem";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(8)};
`;

export const Label = styled.p`
  font-weight: bold;
  font-size: ${pxToRem(14)};
  color: ${global.colors.taupeGrey};
  text-transform: uppercase;
`;

export const Input = styled.input`
  width: ${pxToRem(280)};
  height: ${pxToRem(56)};
  border-radius: ${pxToRem(4)};
  border: ${pxToRem(1)} solid ${global.colors.gainsboro};
  color: ${global.colors.darkSlateGray};
  font-size: ${pxToRem(24)};
  font-weight: bold;
  padding-left: ${pxToRem(8)};
  &:focus-visible {
    outline: none;
  }
`;

export const ErrorMessage = styled.p`
  color: ${global.colors.red};
`;
