import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./Home";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<App />} />
      </Routes>
    </BrowserRouter>
    {/* <Home /> */}

    {/* <App /> */}
  </React.StrictMode>
);
