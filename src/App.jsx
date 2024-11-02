import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Landing from "./pages/Home";
import Contact from "./pages/Contact";
import Academy from "./pages/Academy";
import Club from "./pages/Clubs";
import Conectworking from "./pages/CoNetWorKing";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Landing} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/academy" Component={Academy} />
        <Route path="/club" Component={Club} />
        <Route path="/conetworking" Component={Conectworking} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
