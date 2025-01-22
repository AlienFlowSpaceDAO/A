import background from "../assets/CoNetWorking/CoNetWorKing.webp";
import image from "../assets/CoNetWorking/dreamspace.webp";
import "./conetworking.css"

function Conetworking() {
  const fift=[{img:"img",text:"9 Aeons Experience"},{img:"img",text:"10 Star Rating"},
    {img:"img",text:"Quick Turnaround"},{img:"img",text:"Dedicated Support"},
  ]
  return (
    <div className="conetworking">
    <section className="first-conetworking">
      <h2>CoNetWorking</h2>
      <p>Colaboramos para optimizar tus flujos de trabajo. Participa en el ecosistema DAO, lleno de oportunidades y posibilidades para formar alianzas valiosas con ganancias sostenibles. ¡Conéctate, prospera, triunfa!</p>
      <button className="normalbutton">Contact Now</button>
    </section>
    <section className="second-conetworking">
      <div>Hacemos que participar en nuestro Ecosistema DAO sea accesible, claro y directo, incluso para aquellos que están dando sus primeros pasos en este emocionante viaje. Si tienes preguntas o necesitas más información, estamos aquí para ayudarte. ¡Bienvenido a la Evolución de las Finanzas!</div>
      <div>
        <h2>AMM (Market Maker Automatizado)</h2>
        <p>¡Compra y vende criptomonedas de forma automatizada y sencilla! Facilita los intercambios sin necesidad de intermediarios mediante contratos inteligentes automatizados que usan redes de inteligencia neuronal para comprar barato y vender caro.</p>
      </div>
      <div>
        <h2>DeFi (Finanzas Descentralizadas)</h2>
        <p>Explora un nuevo enfoque financiero. Accede a servicios financieros sin depender de instituciones tradicionales, con tus propias claves privadas y sin exponer datos sensibles.</p>
      </div>
      <div>
        <h2>ReFi (Finanzas Descentralizadas y Regenerativas)</h2>
        <p>¡Gana manteniéndote activo! Nuestro sistema de Staking te permite obtener recompensas al mantener tus criptomonedas con nuestro CoNetWorKing.</p>
      </div>
      <div>
        <h2>Inversión Dual</h2>
        <p>Maximiza tus ganancias participando en diferentes oportunidades de inversión al mismo tiempo.</p>
      </div>
      <div>
        <h2>Farming</h2>
        <p>Siembra y cosecha tus recompensas. Nuestro sistema de permacultura te permite ganar más criptomonedas al participar activamente en la red.</p>
      </div>
      <div>
        <h2>Mining</h2>
        <p>Mina criptomonedas de forma sencilla. Con nuestro sistema de minería, puedes contribuir a la red y recibir recompensas por ello.</p>
      </div>
    </section>
    <section className="third-conetworking"></section>
    <section className="fort-conetworking"> 
      <div>
        <img src={image}/>
        <p>
        You can also find different collaborative networking spaces with cutting-edge technologies as well as tools and instruments such as Blockchain, 
        neural intelligence networks, quantum computing... You can also connect to share knowledge, skills and interests, thus creating the best professional 
        synergies with the best competitive advantages, greater benefits both in your quality of life and professionally, increasing and improving energy 
        efficiency and environmental sustainability in work flows & processes, this is “WorkFlow” guaranteeing mutual gains as a symbiosis...
        </p>
        <button className="normalbutton">Find Now!</button>
      </div>
      <article></article>
      <article></article>
    </section>
    <section className="fift-conetworking">
      <article><h2>Why love nature</h2><p>Build the best experience to create Greater & Better Values ​​for our associations and clients, using markets and business lines to inspire and implement environmentally friendly solutions. We strive to go above and beyond for our associate clientele no matter the challenge. Our goal is to offer the best work every day through our spaces</p></article>
      <article>{fift.map(i=>{return (<div><img src={i.img}></img><p>{i.text} </p></div>)})} </article>
    </section>
    <img className="background" src={background} />
    </div>
  )
}

export default Conetworking
