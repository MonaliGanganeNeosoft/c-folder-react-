// import logo from "./logo.svg";
// import "./App.css";
// // import Counter from "./Fetures/Counter/Counter";
// import React from "react";
// import Counter1 from "./Fetures/Counter/Counter1";
// function App() {
//   return (
//     <div className="App">
//       {/* <Counter /> */}
//       <Counter1 />
//     </div>
//   );
// }

// export default App;

import React from "react";
import logo from "./logo.svg";
import { Counter1 } from "./Fetures/Counter/Counter1";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter1 />
      </header>
    </div>
  );
}

export default App;
