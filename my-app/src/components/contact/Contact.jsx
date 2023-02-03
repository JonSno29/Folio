import React from 'react';
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiWhatsappLine } from "react-icons/ri";
import {FaLinkedin } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
const Contact = () => {
  const form = useRef("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oij5su6', 'template_hednx29', form.current, 'fZOBJ5fkjQdOmQpgN')
     
};
return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>CONTACT ME</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Snoverjon@gmail.com</h5>
            <a href="mailto:Snoverjon@gmail.com" target="_blank" rel="noreferrer">
              Shoot me an Email
            </a>
          </article>
          <article className="contact__option">
            <FaLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>jon-snover-b15272110</h5>
            <a href="https://www.linkedin.com/in/jon-snover-b15272110/" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon" />
            <h4>CallOrText</h4>
            <h5>612.578.5612</h5>
            <a href="tel:(612.578.5612)"> 
              Click to call
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="name" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
)
}



export default Contact;