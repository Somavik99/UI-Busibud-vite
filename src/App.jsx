import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import DetailsPage from "./Components/DeatilsPage/DetailsPage";
import ProfilePlans from "./Components/ProfilePlans/ProfilePlans";
import SignUpUI from "./Components/SignUpUI/SignUpUI";

function App() {
  return (
    <div className="App">
      <h1>Register for Online Galary</h1>
      <div>
        <Routes>
          <Route path="/" element={<SignUpUI />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/ProfilePlan" element={<ProfilePlans />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
