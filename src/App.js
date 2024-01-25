import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navBar";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { PatientsPage } from "./pages/patientsPage";
import { Discharge } from "./pages/discharge";
import { PatientsList } from "./pages/patientsList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <>
                <NavBar />
                <Home />
              </>
            }
          />
          <Route
            path="/patientsPage"
            element={
              <>
                <NavBar />
                <PatientsPage />
              </>
            }
          />
          <Route
            path="/discharge"
            element={
              <>
                <NavBar />
                <Discharge />
              </>
            }
          />

          <Route
            path="/patientsList"
            element={
              <>
                <NavBar />
                <PatientsList />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
