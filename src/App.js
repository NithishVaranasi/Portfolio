import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import About from "./routes/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* Fallback route for 404 */}
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
