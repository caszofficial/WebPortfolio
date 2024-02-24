import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./Styles/index.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./Styles/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
