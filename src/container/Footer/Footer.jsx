import React, { useState, useRef } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../cleint";
import emailjs from "@emailjs/browser";

import "./Footer.scss";

const Footer = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const { name, email, message } = formData;

  const handelChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    if (errors[name] && value.trim()) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmited(true);
    });
    console.log(form.current);
    emailjs
      .sendForm("service_gvyd8fs", "template_ijppoyi", form.current, {
        publicKey: "vwbXCNTHC2kkEu3sq",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <h2 className="head-text">Get in touch.</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a
            href="mailto:abdelmaged.hamdi1@gmail.com
          "
            className="p-text"
          >
            abdelmageedhamdi@gmail.com
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:01026640658" className="p-text">
            01026640658
          </a>
        </div>
      </div>

      {!isFormSubmited ? (
        <form className="app__footer-form app__flex" ref={form}>
          <div className="app__flex column">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handelChangeInput}
            />
            <p className="error"> {errors.name} </p>
          </div>

          <div className="app__flex column">
            <input
              className="p-text"
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={handelChangeInput}
            />
            <p className="error"> {errors.email} </p>
          </div>

          <div className="app__flex column">
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handelChangeInput}
            />
            <p className="error"> {errors.message} </p>
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
