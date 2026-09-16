import homeImg from "../assets/home.jpg";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
            <img src={homeImg} alt="About Us" style={{ maxWidth: "500px", height: "200px" }}/>
    </div>
  );
}

export default Home;