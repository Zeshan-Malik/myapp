
import './App.css';
import NewComponent from "./components/NewComponent"
import { BrowserRouter as Router } from "react-router-dom"
import React from "react";


function App() {
 
  return (
    <div className="App">
      <Router>
        <NewComponent />
      </Router>
    </div>
  );
}

export default App;
