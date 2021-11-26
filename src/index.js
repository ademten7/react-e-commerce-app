import React from "react";
import App from "./App.js";
import ReactDOM from "react-dom";
import Container from "./Context/Container";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {BrowserRouter} from 'react-router-dom'


ReactDOM.render(
  <Container>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Container>,
  document.getElementById("root")
);
