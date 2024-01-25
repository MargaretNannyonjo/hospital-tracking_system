import React from "react";

export const PatientList = ({ patients }) => {
  return (
    <div>
      <h1>Patient List</h1>
      <ul>
        {patients.map((patient) => {
          return (
            <li key={patient.id}>
              {patient.name}- Admission Date: {patient.admissionDate}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
