import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const title = "moni";
  return (
    <div className="App">
      <Navbar title={title} />
    </div>
  );
}

export default App;
