import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <Link to="/Home">Home</Link>
      <Link to="/PatientsPage">Admission Form</Link>
    </div>
  );
};
