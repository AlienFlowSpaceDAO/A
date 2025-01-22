import "./faq.css";

function Faq() {
  const faqData = [
    {
      question: "What is AlienFlowSpace DAO?",
      answer:
        "AlienFlowSpace DAO is a decentralized autonomous organization that combines elements of DeFi, DeSci, GameFi, ReFi, RWA, offering a unique platform where users can access diverse experiences, products, and services, fully personalized and sustainable.",
    },
    {
      question: "What is the AlienFlowSpace CrypToken?",
      answer:
        "The AlienFlowSpace CrypToken is our digital currency that allows users to access liquidity pools and redeem experiences, products, and services within our spaces, including Academy, Clubs, and CoNetWorKing.",
    },
    {
      question: "How can I obtain the CrypToken?",
      answer:
        "Users can obtain the CrypToken through exchanges on cryptocurrency platforms, participating in activities within the DAO, or by providing liquidity.",
    },
    {
      question: "What are liquidity pools?",
      answer:
        "Liquidity pools are pools that allow users to provide liquidity to the platform and fund initiatives in exchange for rewards. These pools are essential for the functioning of our ecosystem.",
    },
    {
      question: "What types of experiences and products can I redeem?",
      answer:
        "Users can redeem the CrypToken & NFTs for various experiences, products, and services in our spaces, which include access to exclusive, fully personalized and sustainable courses, events, experiences, training, products...",
    },
    {
      question: "How do NFT collections work?",
      answer:
        "The NFT collections on AlienFlowSpace offer users exclusive access to exclusive, fully personalized and sustainable activities, courses, events, experiences, training, within our spaces. Each NFT may have unique benefits, advantages, and privileges associated with it.",
    },
    {
      question: "What is DeFi, DeSci, GameFi, ReFi, RWA?",
      answer:
        "DeFi: Decentralized finance that allows transactions without intermediaries. DeSci: Decentralized science that promotes collaboration and research funding. GameFi: Games that integrate financial elements, allowing players to win money. ReFi: Regenerative finance that seeks to create a positive impact on the environment. RWA: Tokenization of real-world assets.",
    },
    {
      question: "How is the security of my funds ensured?",
      answer:
        "Security is a priority at AlienFlowSpace DAO. We use advanced security protocols and regular audits to protect our users' funds. Our recommendation is self-custody, although it is always the user's final responsibility to ensure they use secure wallets and keep their security keys and seed phrases safe when connecting to our DAPP and sign smart contract transactions.",
    },
    {
      question: "Where can I get more information?",
      answer:
        "For more updated information about AlienFlowSpace DAO, please visit our official website or our official social media and channels. If you want more details on a specific topic or need additional help, do not hesitate to contact and ask to answer all your questions!",
    },
  ];

  return (
    <div className="faq-container">
      {faqData.map((item, index) => (
        <details key={index} className="faq-item">
          <summary className="faq-summary">
            <h2>{item.question}</h2>
            <svg
              className="faq-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export default Faq;
