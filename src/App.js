// import logo from "./logo.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactMe from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
