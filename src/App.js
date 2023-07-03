import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./Components/Home";
import Pizza from "./Components/Pizza";


const App = () => {
  return (
    <>
      <h1>Bloomtech Eats</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/pizza" id="order-pizza">Order Pizza</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza" element={<Pizza />} />
      </Routes>

    </>
  );
};
export default App;
