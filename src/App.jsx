import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignUpUI from "./Components/SignUpUI/SignUpUI";

function App() {
  return (
    <div className="App">
      <h1>Register for Online Galary</h1>
      <div>
        <Routes>
          <Route path="/" element={<SignUpUI />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
