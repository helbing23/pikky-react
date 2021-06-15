import React from "react";
import "./App.css";
import {BrowserRouter as Router} from 'react-router-dom';
import SearchPhoto from "./components/SearchPhoto";

function App() {
  return (
    <Router basename = "/pikky-react/">
      <div className="App">
        <div className="container">
          <h1 className="title">React Photo Search</h1>
          <SearchPhoto />
        </div>
      </div>
    </Router>

  );
}
export default App;