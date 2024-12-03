import "./home.css";
import background from "../assets/Home/galaxyEarthMilkyWay.jpg";
import alienbook from "../assets/Home/Alienbook.webp";
import academy from "../assets/Home/Academy.webp";
import club from "../assets/Home/Club.webp";
import conetwork from "../assets/Home/ConetWork.webp";

function Landing() {
  return (
    <div className="home">
      <section className="first-home">
        <h1 className="primary-color">ALIEN FLOW SPACE</h1>
        <p className="text">
          Access & Explore the DAO Ecosystem Solutions
          <br />
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

      <section className="second-home">
        <div className="buttonlist">
          <button className="normalbutton">DeFi</button>
          <button className="normalbutton">DeSci</button>
          <button className="normalbutton">GameFi</button>
          <button className="normalbutton">ReFi</button>
        </div>
  
      </section>

      <section className="third-home">
        <div>
          <button className="specialbutton">
            <img src={academy} />
          </button>
          Learn & Win:
        </div>
        <div>
          <button className="specialbutton">
            <img src={club} />
          </button>
          Enjoy Advantage:
        </div>
        <div>
          <button className="specialbutton">
            <img src={conetwork} />
          </button>
          Elevate your succes:
        </div>
      </section>

      <section className="fourth-home">
        <button className="normalbutton">Academy</button>
        <button className="normalbutton">Clubs</button>
        <button className="normalbutton">CoNetWorking</button>
      </section>

      <section className="fifth-home">
        <h1>Financial Freedom</h1>
        <p className="text">
          Any Individual or Professional can understand the ADVANTAGES of
          digital money.
          <br />
          Impartial money that does not discriminate, decentralized currencies;
          stable without volatility, as well as safe reserves of values.
          <br />
          Access with Crypto, NFTs, Tokens to Order & Generate all types of
          Experiences, Products & Services according to your demands, instantly
        </p>
      </section>

      <section className="sixth-home">
        <div>
          <img></img>
          Cash Money Peer To Peer (P2P)
        </div>
        <div>
          <img></img>
          Person to Person Digital Money
        </div>
        <div>
          <img></img>
          Wallet Connect Web 3!
        </div>
      </section>

      <section className="seventh-home">
        <h1>FAQS Questions?</h1>
        <p>
          Whether you're curious about features, a free trial, or even press
          releases, we're here to answer all your questions.
        </p>
        <button className="normalbutton">Contact Now!</button>
        <img src="" />
      </section>

      <section className="eighth-home">
        <article>
          <div className="icon" />
          <div>
            <h4>SECURE PAYMENT</h4>
            <p>All our payments are encrypted and secured with SSL</p>
          </div>
        </article>
        <article>
          <div className="icon" />
          <div>
            <h4>DELIVERY WITH CARE</h4>
            <p>
              Ultra-fast shipping to your door with efficiency & sustainability
            </p>
          </div>
        </article>
        <article>
          <div className="icon" />
          <div>
            <h4>EXCELLENT SERVICE</h4>
            <p>Live chat and 24/7 support guarantee it</p>
          </div>
        </article>
      </section>

      <img className="background" src={background} />
    </div>
  );
}

export default Landing;
