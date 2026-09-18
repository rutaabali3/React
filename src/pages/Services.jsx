import servicesImg from "../assets/services.jpg";

function Services() {
  return (
    <div>
      <h1>Services</h1>
      <p>Here are the services we offer!</p>
            <img src={servicesImg} alt="About Us" style={{ maxWidth: "500px", height: "200px" }}/>

    </div>
  );
}

export default Services;
