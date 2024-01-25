import { Link } from "react-router-dom";
import { Logout } from "../pages/logout";

export const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to="/Home" className="home">
        Home
      </Link>
      <Link to="/PatientsPage" className="home">
        Admission Form
      </Link>
      <Link to="/Discharge" className="home">
        Discharge Form
      </Link>
      <div
        className="home"
        style={{ fontSize: "1.1rem", textDecoration: "none", color: "white" }}
      >
        <Logout />
      </div>
    </div>
  );
};
