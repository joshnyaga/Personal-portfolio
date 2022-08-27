import React from "react";
import "./portfolio.css";
import image1 from "../../img/image1.png";
import image2 from "../../img/image2.png";
import image3 from "../../img/image3.png";
import image4 from "../../img/service1.png";
import image5 from "../../img/service2.png";
import image6 from "../../img/service3.png";

const Portfolio = () => {
  return (
    <section class="portfolio" id="portfolio">
      <h1 class="heading">
        {" "}
        <span>my</span> portfolio{" "}
      </h1>

      <div class="button-container">
        <div class="btn" data-filter="all">
          all
        </div>
        <div class="btn" data-filter="design">
          design
        </div>
        <div class="btn" data-filter="code">
          code
        </div>
        <div class="btn" data-filter="website">
          website
        </div>
        <div class="btn" data-filter="brand">
          brand
        </div>
      </div>

      <div class="image-container">
        <div class="box design">
          <img src={image1} alt="" />
          <div class="info">
            <h3>Reviewer - Eccomerce like</h3>
          </div>
        </div>

        <div class="box design">
          <img src={image2} alt="" />
          <div class="info">
            <h3>Nolojia- Elearning</h3>
          </div>
        </div>

        <div class="box design">
          <img src={image3} alt="" />
          <div class="info">
            <h3>Blog</h3>
          </div>
        </div>

        <div class="box code">
          <img src={image4} alt="" />
          <div class="info">
            <h3>Landing page-Shop Okoa</h3>
          </div>
        </div>

        <div class="box code">
          <img src={image5} alt="" />
          <div class="info">
            <h3>PROJECT TITLE</h3>
          </div>
        </div>

        <div class="box website">
          <img src={image6} alt="" />
          <div class="info">
            <h3>Travel Choice</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
