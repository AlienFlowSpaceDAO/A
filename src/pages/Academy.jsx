import "./academy.css";
import background from "../assets/Home/galaxyEarthMilkyWay.jpg";

function Academy() {
  return (
    <div className="academy">
      <section className="first-academy">
        <h1>Academia</h1>
        <h3>¡Accede ahora para aprender y ganar!</h3>
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

      <section className="third-academy">
        <div className="third-one">
          <a
            href="https://www.alchemy.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.datocms-assets.com/105223/1701819587-logo.svg"
              alt="Alchemy"
            />
          </a>
          <a
            href="https://www.aulafacil.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.aulafacil.com/images/logo_cabecera.png"
              alt="Aulafacil"
            />
          </a>
          <a
            href="https://explore.org/livecams"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://media.explore.org/logos/explorelogobear-1565208269665.svg"
              alt="Explore"
            />
          </a>
          <a
            href="https://www.oeglobal.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.oeglobal.org/wp-content/themes/oeglobal/dist/images/logos/oeglobal-white_ad7aa00c.svg"
              alt="Oeglobal"
            />
          </a>
          <a
            href="https://www.openuped.eu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.researchgate.net/publication/327974079/figure/fig4/AS:676542128586758@1538311621815/OpenupEd-provided-by-EADTU.png"
              alt="Openuped"
            />
          </a>
          <a
            href="https://www.unssc.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.unssc.org/themes/custom/unsscwebsite/logo.svg"
              alt="Unssc"
            />
          </a>
        </div>
        
        <div className="third-two">
          <a
            href="https://www.edx.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.edx.org/images/logos/edx-logo-elm.svg"
              alt="Edx"
            />
          </a>
          <a
            href="https://grow.google/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://grow.google/root/static/images/logo_GwG.svg"
              alt="Google"
            />
          </a>
          <a
            href="https://www.mooc.org/hubfs/Mooc.org%20Logo.svg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.mooc.org/hubfs/Mooc.org%20Logo.svg"
              alt="Mooc"
            />
          </a>
          <a
            href="https://es.khanacademy.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://yt3.googleusercontent.com/ytc/AIdro_lxBPq0ck_BddM7WCg4YDdpSbMLlYeP8PDfK1BWQiShNes=s900-c-k-c0x00ffffff-no-rj"
              alt="Khan"
            />
          </a>
          <a
            href="https://hotmart.com/es-co"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYOHf79I5IGAWR4V9CcR5tKK8rVAFEReFICg&s"
              alt="Hotmart"
            />
          </a>
          <a
            href="https://www.udemy.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg"
              alt="Udemy"
            />
          </a>
        </div>

        <div className="third-three">
          <a
            href="https://www.edx.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://blog-res.xrcloud.jp/res/blog/wp-content/uploads/2023/06/image-105.png"
              alt="Edx"
            />
          </a>
          <a
            href="https://www.unrealengine.com/en-US"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://dev.epicgames.com/community/api/learning/image/fad6a2fa-ff1a-469f-81d8-f9ffd64d4720?resizing_type=fill&width=1920&height=335"
              alt="Edx"
            />
          </a>
        </div>
      </section>

      <img className="background" src={background} />
    </div>
  );
}

export default Academy;
