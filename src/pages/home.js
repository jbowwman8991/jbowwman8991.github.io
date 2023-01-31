import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div class="content">
      <img
        src={require("../images/drawing-transparent.png")}
        alt="Orenda-box icon"
      />
      <div id="item">
        <div id="highlight"></div>
        <span>Orenda-box</span>
        <div id="text"></div>
      </div>
      <br></br>
      <div class="color"></div>
      <br></br>
      <div class="intro">
        Bringing cloud computing to your workspace. Get all the positives of
        having cheap computers without sacrificing the key programs that make
        your office run.
      </div>
      <br></br>
      <div class="box-image">
        <img src={require("../images/box2.png")} alt="Orenda-box" />
      </div>
      <br></br>
      <div>
        <p>The Orenda-box:</p>
        <ul>
          <li>make a one time purchase for the Orenda-box</li>
          <li>monthly subscription following one time purchase</li>
          <li>free updates covered by monthly subscription</li>
          <li>free repairs covered by monthly subscription</li>
        </ul>
      </div>
      <br></br>
      <div class="color"></div>
      <br></br>
      <div class="buttons">
        <Link class="button-text" to="/contact">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Home;
