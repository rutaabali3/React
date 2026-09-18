import aboutImg from "../assets/about.jpg";

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>We Are Students Of Aptech</p>
      <img src={aboutImg} alt="About Us" style={{ maxWidth: "500px", height: "200px" }}/>
    </div>
  );
}

export default About;