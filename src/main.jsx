import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import App from "@/src/App";
import "./normalize.css";
import theme from "@/src/theme/theme";
import "@/services/i18next/initTranslation";
import GlobalStyles from "@/src/theme/sharedStyles/components/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles/>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
