import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary </header>
        <main>
          <Dictionary defaultKeyword="home" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="www.linkedin.com/in/hannah-lander-b02311b0"
              target="_blank"
              rel="noreferrer"
            >
              Hannah Lander
            </a>{" "}
            and open sourced on{" "}
            <a
              href="https://github.com/HanLander/dictionary-project/tree/main/src"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
