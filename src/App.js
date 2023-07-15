import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Movies from "./components/Home";


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Home />
      <Movies />
    </div>
  );
}

export default App;
