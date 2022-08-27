import React from "react";
import "./about.css";
const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        {" "}
        About <span>Me</span>{" "}
      </h1>

      <div className="row">
        <div className="box">
          <h3 className="title">Coding Skills</h3>
          <div className="progress">
            <h3>
              {" "}
              html and Css <span>95%</span>{" "}
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              {" "}
              Node Js <span>80%</span>{" "}
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              {" "}
              React js <span>65%</span>{" "}
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              {" "}
              Flutter <span>75%</span>{" "}
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
        </div>

        <div className="box">
          <h3 className="title">professional skills</h3>
          <div className="progress">
            <h3>
              {" "}
              web design <span>98%</span>{" "}
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              {" "}
              web development <span>67%</span>{" "}
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              {" "}
              Mobile Applications <span>75%</span>{" "}
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              {" "}
              Backend Development <span>60%</span>{" "}
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
        </div>

        <div className="box">
          <h3 className="title">Summary</h3>
          <div className="exp-box">
            <p>
              Talented and experienced front-end developer with a proven track
              of executing quality work and diverse skills. Adept in
              collaborating with colleagues and committed to achieving state of
              the art successful projects.
            </p>
          </div>
        </div>

        <div className="box">
          <h3 className="title">What I like</h3>

          <div className="exp-box">
            <p>
              I am seeking new opportunities and challenges that will expand my
              skillset.
            </p>
          </div>
        </div>
      </div>

      <div className="download">
        <a href="#" className="btn">
          {" "}
          download CV{" "}
        </a>
      </div>
    </section>
  );
};

export default About;
