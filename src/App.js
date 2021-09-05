import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React is now starting !!!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Josh first step with React
        </a>
      </header>
      <body>
        <h1>This is gonna be fun</h1>
      </body>
    </div>
  );
}

export default App;
