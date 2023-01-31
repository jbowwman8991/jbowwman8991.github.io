import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";
import { Link } from "react-router-dom";
import "./home.css";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Orenda-box Team",
    message: "",
    phone: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_x79k5b6", "template_w0fbo2g", toSend, "wNZAD4KmRKy2oTh3J")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

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
      <div class="intro">Contact us</div>
      <br></br>
      <div>
        <p>
          Fill out the form below or click on the link to access our Google
          Form!
        </p>
        <div class="buttons">
          <Link
            class="button-text"
            to={{ pathname: "https://forms.gle/9o1cZcgNaucVycgK7" }}
            target="_blank"
          >
            Google Form
          </Link>
        </div>
      </div>
      <br></br>
      <form onSubmit={onSubmit}>
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          name="from_name"
          placeholder="John Doe"
          value={toSend.from_name}
          onChange={handleChange}
        />
        <label for="message">Message</label>
        <textarea
          type="text"
          id="message"
          name="message"
          placeholder="..."
          value={toSend.message}
          onChange={handleChange}
        />
        <label for="phone">Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="(123)456-7890"
          value={toSend.phone}
          onChange={handleChange}
        />
        <label for="email">Email</label>
        <input
          type="text"
          id="email"
          name="reply_to"
          placeholder="user@email.com"
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <div class="buttons">
          <button class="button-text" type="submit">
            Submit
          </button>
        </div>
      </form>
      <br></br>
      <div class="color"></div>
      <br></br>
      <div class="buttons">
        <Link class="button-text" to="/home">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Contact;
