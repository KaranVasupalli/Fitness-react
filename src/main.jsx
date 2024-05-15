import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Exercise from './pages/Exercise'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/exercise" element={<Exercise />} />
    </Routes>
  </BrowserRouter>
);
