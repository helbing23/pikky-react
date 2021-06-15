import React from "react";
import "./App.css";
import SearchPhoto from "./components/SearchPhoto";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">React Photo Search</h1>
        <SearchPhoto />
      </div>
    </div>
  );
}
export default App;