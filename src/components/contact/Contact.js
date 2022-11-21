import React from "react";
import "./Contact.css";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
//this is the start for email area link
import { useRef } from "react";
import emailjs from "emailjs-com";
//this is the end for email area link
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xy0eehf",
        "template_obbvgcg",
        form.current,
        "LaMfx3VVvtHmXsFW0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <EmailIcon className="contact__option-icon" />
            <h4>Email</h4>
            <h5>shubhamsdecpporigin@gmail.com</h5>
            <a
              href="mailto:shubhamsdecpporigin@gmail.com"
              rel="noreferrer"
              targte="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <MessageIcon className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Shubham Pawar</h5>
            <a
              href="mailto:shubhamsdecpporigin@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              Send a message
            </a>
            {/* use this, it's for fb */}
            {/* <a href="https://m.me/entercustomidfromfacebook">Send a message</a> */}
          </article>
          <article className="contact__option">
            <WhatsAppIcon className="contact__option-icon" />
            <h4>8928116033</h4>
            <h5>shubhamsdecpporigin@gmail.com</h5>
            <a
              rel="noreferrer"
              href="https://api.whatsapp.com/send?phone=8652412358"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email " />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
