import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CssVarsProvider } from "@mui/joy/styles";

const MyApp = () => {
  return (
    <CssVarsProvider defaultMode="system">
      <App />
    </CssVarsProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MyApp></MyApp>
  </React.StrictMode>
);
