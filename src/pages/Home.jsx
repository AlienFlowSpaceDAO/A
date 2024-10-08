import "./home.css";
import background from "../assets/Home/galaxyEarthMilkyWay.jpg";
import alienbook from "../assets/Home/alienbook.webp";

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
        <button className="normalbutton">Start Now!</button>
        <img src={alienbook} className="image1" />
      </section>
      <section>
        <div className="buttonlist">
          <button className="normalbutton">DeFi</button>
          <button className="normalbutton">DeSci</button>
          <button className="normalbutton">GameFi</button>
          <button className="normalbutton">ReFi</button>
        </div>
        <div></div>
      </section>
      <section></section>
      <section></section>
      <img className="background" src={background} />
    </div>
  );
}

export default Landing;
