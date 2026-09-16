import contactImg from "../assets/contact.jpg";

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Contact Us At: +92 9211 420 144</p>
      <img src={contactImg} alt="Contact Us" style={{ maxWidth: "500px", height: "200px" }}/>

    </div>
  );
}

export default Contact;