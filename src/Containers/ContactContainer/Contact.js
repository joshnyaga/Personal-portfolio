import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <section class="contact" id="contact">
      <h1 class="heading">
        {" "}
        contact <span>me</span>{" "}
      </h1>

      <div class="box-container">
        <div class="box">
          <i class="fas fa-phone"></i>
          <h3>my number</h3>
          <p>+254796143149</p>
        </div>

        <div class="box">
          <i class="fas fa-envelope"></i>
          <h3>my email</h3>
          <p>joshuakithinjinyaga@gmail.com</p>
        </div>

        <div class="box">
          <i class="fas fa-map-marker-alt"></i>
          <h3>my address</h3>
          <p>Ishiara, Kenya - 169-60102</p>
        </div>
      </div>

      <div class="row">
        <form action="">
          <div class="inputBox">
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
          </div>
          <input type="text" placeholder="subject" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="message"
          ></textarea>
          <button class="btn"> send message </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
