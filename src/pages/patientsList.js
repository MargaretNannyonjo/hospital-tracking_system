import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { GraphComponent } from "../components/graph";

export const PatientsList = () => {
  const location = useLocation();
  const { Patients } = location.state || { Patients: [] };
  const graphRef = useRef();

  const handlePatientAdded = (patientCount) => {
    // Update the patient count in the graph component
    console.log("Patient added. Total Patients:", patientCount);
  };

  return (
    <div className="PatientList">
      <h1>LIST OF PATIENTS</h1>

      <div className="patient-list-container">
        {Patients.length === 0 ? (
          <p>No patients available</p>
        ) : (
          <table className="patient-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Name</th>
                <th>Age</th>
                <th>Diagnosis</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {Patients.map((patient, index) => (
                <tr key={index}>
                  <td>{patient.patientNumber}</td>
                  <td>{patient.date}</td>
                  <td>{patient.fullName}</td>
                  <td>{patient.age}</td>
                  <td>{patient.diagnosis}</td>
                  <td>{patient.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <GraphComponent onPatientAdded={handlePatientAdded} ref={graphRef} />
    </div>
  );
};
