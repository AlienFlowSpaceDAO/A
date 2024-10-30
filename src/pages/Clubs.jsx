import background from "../assets/Home/galaxyEarthMilkyWay.jpg";
import "./clubs.css";

function Club() {
  return (
    <div className="club">
      <section className="first-club">
        <h1>Club</h1>
        <h3>Disfrutas las ventajas</h3>
        <p>
          Benefíciate de pedidos exclusivos, completamente personalizables y
          sostenibles; airdrops, eventos, joyería, textiles, torneos, viajes…
        </p>
        <button className="normalbutton">Accede ahora!</button>
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <img className="background" src={background} />
    </div>
  );
}

export default Club;
