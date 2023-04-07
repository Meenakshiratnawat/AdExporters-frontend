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
    <footer className="footer py-0 text-white">
      <div className="container-fluid bg-success text-white text-center py-5">
        {/* <h5 className="text-sm">
          If you got any questions, feel free to reach out!
        </h5>
        <button className="btn btn-warning btn-sm">Contact Us</button> */}

        <div class="footer-sect">
          <h4>SHIPPING &amp; RETURNS</h4>
          <ul>
            <li>
              No additional shipping charges are added to any of our orders.
            </li>
            <li>
              Due to Covid-19, there might be unforseen delays in the shipment
              reaching our customers. We thank you for your patience.
            </li>
            <li>
              We offer a hassle-free return policy. If you're not satisfied with
              your purchase, you can return it within 30 days for a full refund.
            </li>
          </ul>
        </div>

        {/* <h4>Help</h4> */}
        <ul className="list-unstyled pt-5">
          <h4>Help</h4>
          <li className="text-white !important">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="text-white !important">
            <a href="#">Shipping Policy</a>
          </li>
          <li className="text-white !important">
            <a href="#">Terms of Service</a>
          </li>
          <li className="text-white !important">
            <a href="#">Refund Policy</a>
          </li>
          <li className="text-white !important">
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <h5 className="text-sm">
          If you got any questions, feel free to reach out!
        </h5>
        <button className="btn btn-warning btn-sm">Contact Us</button>
      </div>
    </footer>
  </div>
);

export default Base;
