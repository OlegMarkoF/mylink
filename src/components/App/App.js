import "./App.css";
import Main from "../Main/Main";
import { Routes, Route } from "react-router-dom";
import Portfolio from "../Portfolio/Portfolio";
import NotFound from "../NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
