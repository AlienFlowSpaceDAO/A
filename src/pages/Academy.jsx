import "./academy.css";
import background from "../assets/Home/galaxyEarthMilkyWay.jpg";
import absolute from "../assets/Academy/Absolute.webp";

function Academy() {
  return (
    <div className="academy">
      <section className="first-academy">
        <h1>Academia</h1>
        <h3>¡Accede ahora para aprender y ganar!</h3>
        <img src={absolute} />
      </section>

      <section className="second-academy">
        <p>
          Adquiere habilidades de mindfulness para descubrir conocimientos y
          destrezas que te ayudarán a evolucionar y te impulsarán hacia una
          experiencia óptima en plenitud de flujo; cómo mejorar los beneficios
          en tu calidad de vida con ganancias sostenibles, obteniendo bienestar
          emocional en plenitud, crecimiento y desarrollo a nivel personal y
          profesional, explorando tanto técnicas ancestrales como tecnologías de
          vanguardia…
        </p>
        <p>
          Conéctate en un nivel más profundo contigo mismo, con tu mundo y con
          este planeta. ¡Inicia tu transformación ahora!
        </p>
        <h4>Módulos de formación</h4>
        <ul>
          <li>Abundancia y Libertad (EcoFinTech, Comercio Electrónico)</li>
          <li>Autogestión y Sostenibilidad (Ecología, Permacultura)</li>
          <li>
            Armonía y Trascendencia (Alquimia, Mindfulness enfocado,
            Meditaciones)
          </li>
        </ul>
        <h4>Bootcamps</h4>
        <ul>
          <li>Inteligencia Artificial (Red Neuronal)</li>
          <li>Desarrollo Blockchain</li>
          <li>Creación de Proyectos Web 3</li>
          <li>Fundamentos de Programación</li>
          <li>Computación Cuántica</li>
        </ul>
        <button className="normalbutton">Access Now!</button>
      </section>

      <section className="third-academy"></section>

      <img className="background" src={background} />
    </div>
  );
}

export default Academy;
