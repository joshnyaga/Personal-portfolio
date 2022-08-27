import React from "react";
import "./nav.css";
import { RiMenu3Fill } from "react-icons/ri";
const Nav = () => {
  return (
    <header className="header-home">
      <a href="#home" className="logo">
        <span>JoshKay </span>
      </a>

      <input type="checkbox" id="menu-bar" />
      <label for="menu-bar">
        <RiMenu3Fill />
      </label>

      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#service">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact me</a>
      </nav>
    </header>
  );
};

export default Nav;
