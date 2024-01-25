import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import empty_graph from "../img/empty-graph.jpg";

export const GraphComponent = forwardRef(({ onPatientAdded }, ref) => {
  const [patients, setPatients] = useState([]);

  const addPatient = () => {
    setPatients((prevPatients) => [...prevPatients, {}]);
  };

  const updatePatientCount = () => {
    if (onPatientAdded) {
      onPatientAdded(patients.length);
    }
  };

  useEffect(() => {
    // Trigger the callback function on each update
    updatePatientCount();
  });

  // Assign the ref to the forwarded ref
  useImperativeHandle(ref, () => ({
    updatePatientCount,
  }));

  return (
    <div style={{ height: "500px" }}>
      <h2 style={{ paddingTop: "20px" }}> Patient Flow Graph</h2>
      <p style={{ paddingTop: "0", paddingBottom: "10px" }}>
        Total Patients: {patients.length}
      </p>
      <img
        src={empty_graph}
        alt=""
        style={{ height: "500px", width: "500px" }}
      />

      {patients.map((patient, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            width: "10px",
            height: "10px",
            backgroundColor: "red",
            borderRadius: "50%",
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 90 + 5}%`,
          }}
        ></div>
      ))}
    </div>
  );
});
