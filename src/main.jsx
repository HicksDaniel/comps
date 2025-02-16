import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { NavigationProvider } from "./context/navigation.jsx";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
