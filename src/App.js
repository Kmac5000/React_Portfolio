// import logo from "./logo.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactMe from "./components/Contact";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <main className="App-header">
        <img src="logo512.png" className="App-logo" alt="face" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </main> */}
      <About />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
