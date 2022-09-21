import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Root from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Members from "./pages/Members";
import Error from "./pages/404";
import MemberDetail from "./pages/Members/MemberDetail";

// root
// sidebar
// content

// homepage
// about
// members

// id
// name
// age
// members/:memberId = members/1

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="members" element={<Members />}>
              <Route path=":id" element={<MemberDetail />} />
            </Route>
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
