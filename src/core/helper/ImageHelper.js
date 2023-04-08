import React from "react";
import { API } from "../../backend";

const ImageHelper = ({ product }) => {
  const imageurl = product
    ? `${API}/product/photo/${product._id}`
    : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
  return (
<div className="d-flex justify-content-center align-items-center" style={{ width: "300px", height: "200px" }}>
    <img
      src={imageurl}
      alt="photo"
      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s", marginBottom: "10px" }}
      className="rounded hover-zoom"
    />
  </div>


  );
};

export default ImageHelper;
