import testComponentTheme from "@/src/theme/componentsTheme/TestComponent";
import global from "./global";

const componentsTheme = {
  testComponentTheme,
};

const theme = {
  ...global,
  ...componentsTheme,
};

export default theme;
