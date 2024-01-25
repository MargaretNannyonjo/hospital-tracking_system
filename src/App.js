import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navBar";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { PatientsPage } from "./pages/patientsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login exact component={Login} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/patientsPage" element={<PatientsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
