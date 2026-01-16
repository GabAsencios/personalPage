import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App, ThemeToggler } from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <ThemeToggler />
  </StrictMode>,
);
