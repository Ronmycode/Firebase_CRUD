import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import Footer from "./Components/Footer.jsx";
import "../src/sass/style.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Footer />
  </StrictMode>
);
