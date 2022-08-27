import React from "react";
import "./service.css";
import { CgWebsite } from "react-icons/cg";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineAssignment } from "react-icons/md";
import { SiMaterialdesignicons } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
const Service = () => {
  return (
    <section className="services" id="service">
      <h1 className="heading">
        {" "}
        <span>my</span> services{" "}
      </h1>

      <div className="box-container">
        <div className="box">
          <span className="number">1</span>
          <CgWebsite size={80} />
          <h3>Web Backend Development</h3>
          <p>
            Are you in need of a web backend? If you are a frontend developer
            who wants some backend added to your frontend I will do it for you.
          </p>
        </div>

        <div className="box">
          <span className="number">2</span>
          <FaMobileAlt size={80} />
          <h3>Mobile Applications</h3>
          <p>
            I develop android native apps and hybrid apps that include android
            and ios. I create apps that have interactive user interface.
          </p>
        </div>

        <div className="box">
          <span className="number">3</span>
          <MdOutlineAssignment size={80} />
          <h3>Coding Assignments</h3>
          <p>
            Are you a student in computing and need help with your coding
            assignments? Reach out for help by contacting me. I will also tutor
            you.
          </p>
        </div>

        <div className="box">
          <span className="number">4</span>
          <AiOutlineVideoCameraAdd size={80} />
          <h3>Video Editing</h3>
          <p>
            I edit videos for vloggers and youtube content creators. To know
            more, feel free to contact me.
          </p>
        </div>

        <div className="box">
          <span className="number">5</span>
          <AiFillApi size={80} />
          <h3>web development</h3>
          <p>
            I develop fullstack web apps like eccomerce web apps and blogs.The
            list is unlimitted anything web related.
          </p>
        </div>

        <div className="box">
          <span className="number">6</span>
          <SiMaterialdesignicons size={80} />
          <h3>web design</h3>
          <p>
            Are you looking for a landing page website for your business? Take
            your business to the next level.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
