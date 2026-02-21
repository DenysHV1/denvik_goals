import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/styles/index.css";
import { ThemeProvider } from "denvik-ui-kit";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultMode="light">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
