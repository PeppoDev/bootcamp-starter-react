import React from "react";
import Routes from "./routes";
import Header from "./components/Header";
//css
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes></Routes>
    </div>
  );
}

export default App;
