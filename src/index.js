import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import "./css/style.css";
import "./css/home.css";
import "./scss/templates/_navigation.scss";
import "./scss/home.scss";
import "./scss/style.scss";
import "./scss/templates/_products.scss";
import "./scss/templates/_slider.scss";

const app = ReactDOMClient.createRoot(document.getElementById("app"));
app.render(<App />);
