import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>

        <footer className="text-center">Coded by Katerina Tri</footer>
      </div>
    </div>
  );
}

export default App;
