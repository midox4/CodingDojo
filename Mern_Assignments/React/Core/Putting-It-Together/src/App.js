import logo from "./logo.png";
import "./App.css";
import PersonCard from "./components/cards/card"

function App() {
  return (
      <div>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Hello Coding Dojo to Our MernStack</h1>
      </header>

      <PersonCard
        firstName="John"
        lastName="Doe"
        age={30}
        hairColor="Black"
      />
      <PersonCard
        firstName="Jane"
        lastName="Smith"
        age={25}
        hairColor="Blonde"
      />
      <PersonCard
        firstName="Alice"
        lastName="Johnson"
        age={28}
        hairColor="Brown"
      />
      <PersonCard
        firstName="Bob"
        lastName="Williams"
        age={35}
        hairColor="Red"
      />
    </div>
      </div>



  );
}

export default App;
