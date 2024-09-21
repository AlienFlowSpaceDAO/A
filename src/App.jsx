import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Landing from "./pages/Landing";
import Academy from "./pages/Academy";
import Club from "./pages/Club";
import Conectworking from "./pages/Conetworking";

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
        <Route path="/academy" Component={Academy} />
        <Route path="/club" Component={Club} />
        <Route path="/conetworking" Component={Conectworking} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
