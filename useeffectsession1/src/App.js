import logo from "./logo.svg";
import "./App.css";
import ClassCounterone from "./components/ClassCounterone";
import HookCounterOne from "./components/HookCounterOne";
import ClasscounterTwo from "./components/ClasscounterTwo";
import HookCounterTwo from "./components/HookCounterTwo";
import ClassMouse from "./components/mouse/ClassMouse";
import HookMouse from "./components/mouse/HookMouse";
import MouseContainer from "./components/mouse/MouseContainer";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookcounter from "./components/IntervalHookcounter";

function App() {
  return (
    <div className="App">
      {/* <ClassCounterone />
      <HookCounterOne /> */}
      {/* <ClasscounterTwo /> */}
      {/* <HookCounterTwo /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      <IntervalClassCounter />
      <IntervalHookcounter />
    </div>
  );
}

export default App;
