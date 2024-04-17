import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { ThemeProvider } from "@emotion/react";
import theme from "@/src/theme/theme";
import "@/services/i18next/initTranslation";
import "../../src/normalize.css";
import GlobalStyles from "@/src/theme/sharedStyles/components/GlobalStyles";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: { default: theme },
    defaultTheme: "default",
    Provider: ThemeProvider,
    GlobalStyles,
  }),
];

export default preview;
