import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  // description = "My desription",
  className = "text-white p-4",
  children,
}) => (
  <div>
    <Menu />
    <div className="container-fluid">
      <div className="jumbotron  text-white text-center mb-0">
        <h2 className="display-4 pt-5">{title}</h2>
      </div>
      <div className={`container ${className}`}>{children}</div>
    </div>
    <footer className="footer bg-success text-white py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center">
            <div className="footer-sect">
              <h4>SHIPPING &amp; RETURNS</h4>
              <ul>
                <li>
                  No additional shipping charges are added to any of our orders.
                </li>
                <li>
                  Due to Covid-19, there might be unforseen delays in the
                  shipment reaching our customers. We thank you for your
                  patience.
                </li>
                <li>
                  We offer a hassle-free return policy. If you're not satisfied
                  with your purchase, you can return it within 30 days for a
                  full refund.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <h4>HELP</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Shipping Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Refund Policy</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 text-center">
            <h4>CONTACT US</h4>
            <p>
              Email: alluringdesignexporters@gmail.com
              <br />
              Phone: 7792823718
              <br />
              Address: 94 B Tejaji nagar, Gopalpura, 302015, Jaipur, Rajasthan
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} Adex.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Base;
