import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
//homepage
// members
// id
// name
// age
// members/:memberId = members/1

function App() {
  console.log(Math.floor(Math.random() * 90 + 10));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
