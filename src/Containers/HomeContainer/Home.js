import React from "react";
import "./home.css";
const Home = () => {
  return (
    <section id="home">
      <div className="container-home">
        <h1>Hello, 👋</h1>
        <h2>
          My name is <span>Joshua</span>.
        </h2>
        <h3>A Web Developer and a Mobile Developer</h3>
        <a href="#about" className="btn">
          See more
        </a>
      </div>
    </section>
  );
};

export default Home;
