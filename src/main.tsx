import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/styles/index.css";
import App from "./app/App.tsx";
import { ThemeProvider } from "denvik-ui-kit";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultMode="light">
      <App />
    </ThemeProvider>
  </StrictMode>,
);
