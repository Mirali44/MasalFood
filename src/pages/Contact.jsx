import { useState } from "react";
import Input from "../components/UI/Input";
import Textarea from "../components/UI/Textarea";
import { postUserInfo } from "../components/util/http";
import "./Contact.css";

function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const contactInfo = {
      fullName,
      email,
      subject,
      message,
    };

    console.log(contactInfo);
    postUserInfo(contactInfo);
  }

  return (
    <>
      <h1 style={{ textAlign: "center", color: "white", marginTop: 55 }}>
        Contact us
      </h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <Input
          className="contact-input"
          label="Full Name"
          type="text"
          id="name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          className="contact-input"
          label="E-Mail Address"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          className="contact-input"
          label="Subject"
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <Textarea
          className="contact-input"
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="form-button">
          Send
        </button>
      </form>
    </>
  );
}

export default Contact;
