import React, { useState, useEffect } from "react";
import { Redirect, Link, NavLink, Navigate } from "react-router-dom";
import brass from "../../core/helper/categoriesp/brass.jpg";
import anim_scl from "../../core/helper/categoriesp/elephant.jpg";
import handicraft from "../../core/helper/categoriesp/handicraft.jpg";
import marbel_dust from "../../core/helper/categoriesp/marbel dust.jpg";
import sclupter from "../../core/helper/categoriesp/buddha.jpg";
import wedding from "../../core/helper/categoriesp/wedding stuff.jpg";
import wodden from "../../core/helper/categoriesp/drawer.jpg";

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
    <div className="rounded p-0 mb-3">
      <div className="position-relative" onClick={goToProduct}>
        {getARedirect(redirect)}
        <img
          src={imageurl}
          alt="photo"
          style={{ maxWidth: "100%", height: "auto", maxHeight: "50vh" }}
          className="rounded"
        />
        <div
          className="position-absolute w-100 text-center"
          style={{ top: "100%", marginTop: "0.5rem" }}
        >
          <h5 style={{ fontSize: "1.5rem", color: "#fff" }}>{cartTitle}</h5>
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
