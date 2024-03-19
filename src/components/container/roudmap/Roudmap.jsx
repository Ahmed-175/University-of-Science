import React from "react";
import "./roudmap.css";
import Img1 from "./b.jpg";
import Img2 from "./c.jpg";
import Img3 from "./d.jpg";
import { Link } from "react-router-dom";

function Roudmap() {
  return (
    <div>
      <section id="roudmap">
        <h1>roudmap</h1>
        <div className="bac-roud"></div>
        {" "}
        <div className="roud-card">
          <img src={Img1} className="img-roud-card" />
          <h2>Natural Sciences</h2>
          <Link to={"/naturalsciences"}>
            <button className="btn-roud" id="btn">
              read more
            </button>
          </Link>
        </div>


        <div className="roud-card">
          <img src={Img3} className="img-roud-card" />
          <h2>Biological Sciences</h2>
          <Link to={'biologicalsciences'}>
            <button className="btn-roud" id="btn">
              read more
            </button>
          </Link>

        </div>






        <div className="roud-card">
          <img src={Img2} className="img-roud-card" />
          <h2>Geosciences</h2>

          <Link to={'/geosciences'}>
            <button className="btn-roud" id="btn">
              read more
            </button>
          </Link>
        </div>

      </section>
    </div>
  );
}

export default Roudmap;
