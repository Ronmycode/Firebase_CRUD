import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import App from "./App.jsx";

import Footer from "./Components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Footer />
  </StrictMode>
);
