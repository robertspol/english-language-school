import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import Site from "./Site";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <Header />
        </header>

        <main className="main">
          <nav className="nav">
            <Navigation />
          </nav>

          <section className="site">
            <Site />
          </section>
        </main>

        <footer className="footer">Copyright © 2021 Robert Stec</footer>
      </div>
    </Router>
  );
}

export default App;