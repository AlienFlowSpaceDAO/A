import "./home.css";
import Faq from "../components/Faq";
import background from "../assets/Home/galaxyEarthMilkyWay.jpg";
import galaxy from "../assets/Home/galaxygif.gif";
import alienbook from "../assets/Home/Alienbook.webp";
import academy from "../assets/Home/Academy.webp";
import club from "../assets/Home/Club.webp";
import conetwork from "../assets/Home/ConetWork.webp";
import letras from "../assets/Home/letras.svg";
import arrow from "../assets/Home/arrow.svg";
import bitcoin from "../assets/Home/bitcoin.png";
import p2p from "../assets/Home/p2p.jpg";
import wallet from "../assets/Home/wallet.png";
import delivery from "../assets/Home/delivery.svg";
import payment from "../assets/Home/payment.svg";
import service from "../assets/Home/service.svg";

function Landing() {
  return (
    <div className="home">
      <section className="first-home">
        <div className="shadow-overlay"></div>

        <h1 className="primary-color">ALIEN FLOW SPACE</h1>
        <p>
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

        <img src={alienbook} />

        <a className="normalbutton" href="#second-home">
          <img src={arrow} />
        </a>
      </section>

      <section id="second-home" className="second-home">
        <div className="buttonlist">
          <button className="secondbutton">DeFi</button>
          <button className="secondbutton">DeSci</button>
          <button className="secondbutton">GameFi</button>
          <button className="secondbutton">ReFi</button>
        </div>
        <img src={galaxy} />
      </section>

      <section className="third-home">
        <div>
          <a className="specialbutton" href="/academy">
            <img src={academy} />
          </a>
          Learn & Win
        </div>
        <div>
          <a className="specialbutton" href="/club">
            <img src={club} />
          </a>
          Enjoy Advantage
        </div>
        <div>
          <a className="specialbutton" href="/conetworking">
            <img src={conetwork} />
          </a>
          Elevate your succes
        </div>
      </section>

      <section className="fifth-home">
        <h1>Financial Freedom</h1>
        <p>
          Any Individual or Professional can understand the ADVANTAGES of
          digital money.
          <br />
          Impartial money that does not discriminate, decentralized currencies;
          stable without volatility, as well as safe reserves of values.
          <br />
          Access with Crypto, NFTs, Tokens to Order & Generate all types of
          Experiences, Products & Services according to your demands, instantly
        </p>
        <img src={letras} />
      </section>

      <section className="sixth-home">
        <a
          href="https://bitcoin.org/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={bitcoin} />
          Cash Money Peer To Peer (P2P)
        </a>
        <a
          href="https://bitcoincash.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={p2p} />
          Person to Person Digital Money
        </a>
        <a href="https://reown.com/" target="_blank" rel="noopener noreferrer">
          <img src={wallet} />
          Wallet Connect Web 3!
        </a>
      </section>

      <section className="seventh-home">
        <h1>FAQS Questions?</h1>
        <p>
          Whether you're curious about features, a free trial, or even press
          releases, we're here to answer all your questions.
        </p>

        <Faq />
        <button className="normalbutton">Contact Now!</button>

        <img src="" />
      </section>

      <section className="eighth-home">
        <article>
          <img className="icon" src={payment} />
          <div>
            <h4>SECURE PAYMENT</h4>
            <p>All our payments are encrypted and secured with SSL</p>
          </div>
        </article>
        <article>
          <img className="icon" src={delivery} />
          <div>
            <h4>DELIVERY WITH CARE</h4>
            <p>
              Ultra-fast shipping to your door with efficiency & sustainability
            </p>
          </div>
        </article>
        <article>
          <img className="icon" src={service} />
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
