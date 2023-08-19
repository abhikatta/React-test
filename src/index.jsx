import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
const Fonts = () => (
  <link
    href="https://fonts.googleapis.com/css?family=Montserrat"
    rel="stylesheet"></link>
);

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
ReactDom.render(
  <React.StrictMode>
    <Fonts />
  </React.StrictMode>,
  document.getElementById("links")
);
