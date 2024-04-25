import testComponentTheme from "@/src/theme/componentsTheme/TestComponent";
import typeTheme from "@/src/theme/componentsTheme/TypeTheme";
import global from "./global";

const componentsTheme = {
  testComponentTheme,
  typeTheme,
};

const theme = {
  ...global,
  ...componentsTheme,
};

export default theme;
