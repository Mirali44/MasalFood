import Input from "../components/UI/Input";
import Textarea from "../components/UI/Textarea";
import "./Contact.css";

function Contact() {
  function handleSubmit() {
    alert("Form submitted")
  }

  return (
    <>
      <h1 style={{ textAlign: "center", color: "white", marginTop: 55 }}>
        Contact us
      </h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Subject" type="text" id="subject" />
        <Textarea label="Message" />
        <button onClick={handleSubmit} className="form-button">Send</button>
      </form>
    </>
  );
}

export default Contact;
