import React from "react";
import anim_scl from "../../core/helper/categoriesp/animal sclupture.jpg";
import brass from "../../core/helper/categoriesp/brass.jpg";
import handicraft from "../../core/helper/categoriesp/handicraft.jpg";
import marbel_dust from "../../core/helper/categoriesp/marbel dust.jpg";
import sclupter from "../../core/helper/categoriesp/sclupter.jpg";
import wedding from "../../core/helper/categoriesp/wedding stuff.jpg";
import wodden from "../../core/helper/categoriesp/wodden.jpg";

//import { API } from "../../backend";
const CImagehelper = ({ category }) => {
  const imageurl = getImageUrl(category.name);
  return (
    <div className="rounded p-0">
      <img
        src={imageurl}
        alt="photo"
        style={{ maxWidth: "100%", height: "auto", maxHeight: "50vh" }}
        className="mb-0 rounded"
      />
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
