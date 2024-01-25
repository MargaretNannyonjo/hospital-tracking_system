import inpt_dpt from "../img/inpt_dpt.png";
import outpt_dpt from "../img/outpt_dpt.png";
import emergency from "../img/emergency.png";
import graph from "../img/graph.jpg";
// import { PatientsList } from "./patientsList";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="HomePageDetails">
      <div className="Boximg">
        <img
          src={inpt_dpt}
          alt=""
          style={{ width: "10rem", height: "12rem", marginTop: "2rem" }}
        />
        <Link
          to="/patientsList"
          style={{ textDecoration: "none", color: "black" }}
        >
          IN PATIENTS
        </Link>
      </div>

      <div className="Boximg">
        <img
          src={outpt_dpt}
          alt=""
          style={{ width: "10rem", height: "12rem", marginTop: "2rem" }}
        />
        <Link
          to="/patientsList"
          style={{ textDecoration: "none", color: "black" }}
        >
          OUT PATIENTS
        </Link>
      </div>

      <div className="Boximg">
        <img
          src={emergency}
          alt=""
          style={{ width: "10rem", height: "12rem", marginTop: "2rem" }}
        />
        <Link
          to="/patientsList"
          style={{ textDecoration: "none", color: "black" }}
        >
          EMERGENCIES
        </Link>
      </div>

      <div className="Boximg">
        <img
          src={graph}
          alt=""
          style={{ width: "10rem", height: "12rem", marginTop: "2rem" }}
        />
        <Link
          to="/patientsList"
          style={{ textDecoration: "none", color: "black" }}
        >
          PATIENTS FLOW GRAPH
        </Link>
      </div>
    </div>
  );
};
