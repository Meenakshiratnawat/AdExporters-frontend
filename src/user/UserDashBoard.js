import React from "react";
import Base from "../core/Base";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { isAutheticated } from "../auth/helper";

const UserDashBoard = () => {

    const name = isAutheticated().user.name;
    const email = isAutheticated().user.email;
  return (
    <Base title="User Dashboard">
      <div>
        <h2 style={{ textAlign: "left", fontSize: "24px" }}>Name: {name}</h2>
        <h2 style={{ textAlign: "left", fontSize: "24px" }}>Email: {email}</h2>
        <h2 style={{ textAlign: "left", fontSize: "24px" }}>
        You will get the mail invoice on successful purchase. Alternatively
          you can contact us at below links for further query.
        </h2>
        <div>
          <a href="https://wa.me/8619233925" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={50} style={{ color: "#28a745", marginRight: "10px" }}/>
          </a>
          <a href="mailto:alluringdesignexporters@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={50} style={{ color: "#28a745" }}/>
          </a>
        </div>
      </div>
    </Base>
  );
};

export default UserDashBoard;
