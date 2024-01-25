import inpt_dpt from "../img/inpt_dpt.png";
import outpt_dpt from "../img/outpt_dpt.png";
import emergency from "../img/emergency.png";
import graph from "../img/graph.jpg";

export const Home = () => {
  return (
    <div className="HomePageDetails">
      <div className="Boximg">
        <img
          src={inpt_dpt}
          alt=""
          style={{ width: "10rem", height: "10rem", marginTop: "2rem" }}
        />
        <p>IN PATIENTS</p>
      </div>

      <div className="Boximg">
        <img
          src={outpt_dpt}
          alt=""
          style={{ width: "10rem", height: "10rem", marginTop: "2rem" }}
        />
        <p>OUT PATIENTS</p>
      </div>

      <div className="Boximg">
        <img
          src={emergency}
          alt=""
          style={{ width: "10rem", height: "10rem", marginTop: "2rem" }}
        />
        <p>EMERGENCIES</p>
      </div>

      <div className="Boximg">
        <img
          src={graph}
          alt=""
          style={{ width: "10rem", height: "10rem", marginTop: "2rem" }}
        />
        <p> PATIENT FLOW GRAPH</p>
      </div>
    </div>
  );
};
