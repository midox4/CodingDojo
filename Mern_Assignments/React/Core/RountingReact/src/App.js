import './App.css';
import Home from './components/Home';
import {Routes, Route} from "react-router-dom";
import ParamsComponent from './components/Paramscomponents';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route element={<Home />} path="/home"/>
        <Route element={<ParamsComponent />} path="/:word" />
        <Route element={<ParamsComponent />} path="/:word/:color/:bgCol" />
      </Routes>

    </div>
  );
}

export default App;