import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Hello Coding Dojo to Our MernStack</h1>
      </header>
      <section>
        <h2> Hello Dojo !</h2>
        <p>Things I Need To Do : </p>
        <ul>
          <li>Learn React</li>
          <li>Learn NodeJS</li>
          <li>doing some projects</li>
          <li>Learn express</li>

        </ul>
      </section> 


    </div>
  );
}

export default App;
