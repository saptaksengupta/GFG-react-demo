import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComponentOne from "./Comp1";
import ComponentTwo from "./Comp2";
import Home from "./Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comp-one" element={<ComponentOne />} />
          <Route path="/comp-two" element={<ComponentTwo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
