import "./home.css";
import background from "../assets/Home/galaxyEarthMilkyWay.jpg";

function Landing() {
  return (
    <div className="home">
      <section className="first-home">
        <h1 className="titles primary-color">ALIEN FLOW SPACE</h1>
        <p className="text">Access & Explore the DAO Ecosystem Solutions</p>
        <p>
          Unlock the Evolution of Energy Efficiency with Environmental
          Sustainability
        </p>
        <h3>
          Boost BENEFITS, Raise your QUALITY of LIFE, with Mutual PROFITS; to
          connect you EXCLUSIVE ADVANTAGES…
        </h3>
        <button>Start Now!</button>
      </section>
      <section></section>
      <section></section>
      <section></section>
      <img className="background" src={background} />
    </div>
  );
}

export default Landing;
