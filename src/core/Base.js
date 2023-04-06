import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  // description = "My desription",
  className = " text-white p-4",
  children,
}) => (
  <div>
    <Menu />
    <div className="container-fluid">
      <div className="jumbotron  text-white text-center">
        <h2 className="display-6 py-3">{title}</h2>
      </div>
      <div className={className}>{children}</div>
    </div>
    <footer className="footer   py-0">
      <div className="container-fluid bg-success text-white text-center  py-2">
        <h5 className="text-sm">
          If you got any questions, feel free to reach out!
        </h5>
        <button className="btn btn-warning btn-sm ">Contact Us</button>
      </div>
    </footer>
  </div>
);

export default Base;
