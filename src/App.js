import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import logo1 from "./logo1.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo1} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="agape" />
        </main>

        <footer className="text-center">
          This project was coded by Katerina Tri it is open-sourced on{" "}
          <a
            href="https://github.com/EkateriniTri/dictionary-project.git"
            target="_blank"
            rel="noopener noreferrer">
            {" "}
            GitHub{" "}
          </a>
          and{" "}
          <a
            href="https://agape-react-dictionary.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
