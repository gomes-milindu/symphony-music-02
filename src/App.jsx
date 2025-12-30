import { useState } from "react";

import "./App.css";

import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<h1>This is About</h1>} />
          <Route path="/contact" element={<h1>This is Contact</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
