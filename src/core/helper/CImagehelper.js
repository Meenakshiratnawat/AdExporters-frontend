import React, { useState, useEffect } from "react";
import { Redirect, Link, NavLink, Navigate } from "react-router-dom";
import anim_scl from "../../core/helper/categoriesp/animal sclupture.jpg";
import brass from "../../core/helper/categoriesp/brass.jpg";
import handicraft from "../../core/helper/categoriesp/handicraft.jpg";
import marbel_dust from "../../core/helper/categoriesp/marbel dust.jpg";
import sclupter from "../../core/helper/categoriesp/sclupter.jpg";
import wedding from "../../core/helper/categoriesp/wedding stuff.jpg";
import wodden from "../../core/helper/categoriesp/wodden.jpg";

//import { API } from "../../backend";
const CImagehelper = ({ category }) => {
  const [redirect, setRedirect] = useState(false);
  const cartTitle = category ? category.name : "A photo from pexels";

  const getARedirect = (redirect) => {
    if (redirect) {
      return <Navigate to="/product" state={category._id} />;
    }
  };

  const goToProduct = () => {
    setRedirect(true);
  };

  const imageurl = getImageUrl(category.name);
  return (
<div className="rounded p-0">
<div className="rounded p-0">
  <div className="position-relative">
  {getARedirect(redirect)}
    <img
      src={imageurl}
      alt="photo"
      style={{ maxWidth: "100%", height: "auto", maxHeight: "50vh", transition: "transform 0.5s" }}
      className="rounded hover-zoom"
      onClick={goToProduct}
    />
    <div className="hover-title position-absolute text-center">
      <h5 style={{fontSize: "1.5rem"}}>{cartTitle}</h5>
    </div>
  </div>
</div>

</div>


  );
};

function getImageUrl(name) {
  var imageurl;
  if (name === "Sculptures") {
    imageurl = sclupter;
  } else if (name === "Animal Sculptures") {
    imageurl = anim_scl;
  } else if (name === "Marble Dust") {
    imageurl = marbel_dust;
  } else if (name === "Wedding Stuff") {
    imageurl = wedding;
  } else if (name === "Wooden Items") {
    imageurl = wodden;
  } else if (name === "Brass Items") {
    imageurl = brass;
  } else if (name === "Handicrafts") {
    imageurl = handicraft;
  } else {
    imageurl = sclupter;
  }
  return imageurl;
}

export default CImagehelper;
