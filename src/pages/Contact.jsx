import background from "../assets/Home/galaxyEarthMilkyWay.jpg";
import "./contact.css";
import { InlineWidget } from "react-calendly";
import milkyway from "../assets/Contact/milkyway.jpg";

function Contact() {
  return (
    <div className="contact">
      <section className="first-contact">
        <h1 className="primary-color">Contact</h1>
      </section>
      <section className="second-contact">
        <h2 className="main-heading">
          Let's stay connected, you can find us here
        </h2>
        <p className="description">
          Contact now to explore and learn more about how we can help your
          quality of life improve and your successes flourish; so that they
          provide you with greater and better profits.
        </p>
        <div className="contact-details">
          <div className="icon">
            <img src="email-icon.png" alt="Email Icon" />
          </div>
          <p className="email">G@AlienFlow.Space</p>
        </div>

        <ul className="list-networks">
          <li>mail</li>
          <li>face</li>
          <li>insta</li>
          <li>linkedin</li>
          <li>telegram</li>
          <li>twitter</li>
          <li>whats</li>
          <li>youtu</li>
        </ul>
      </section>
      <div className="third-contact">
        <img src={milkyway} />
      </div>
      <section className="fourth-contact">
        <InlineWidget
          url="https://calendly.com/giovanni-cespedes-22"
          pageSettings={{
            backgroundColor: "000",
            hideEventTypeDetails: false,
            primaryColor: "00ff00",
            textColor: "fff",
          }}
        />
      </section>
      <img className="background" src={background} />
    </div>
  );
}

export default Contact;
