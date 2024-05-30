import "./App.css";
import Main from "../Main/Main";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Portfolio from "../Portfolio/Portfolio";
import Gallery from "../Gallery/Gallery";
import NotFound from "../NotFound/NotFound";
import Contacts from "../Contacts/Contacts";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
