import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Rusarm from "./pages/Rusarm";
import { barer } from "./Components/Data";
import { haybar } from "./Components/Data";
import Hayrus from "./pages/Hayrus";
import Etymology from "./pages/Etymology";
import Basket from "./pages/Basket";
import { useState } from "react";

function App() {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [dontCorrect, setDontCorrect] = useState(0)

  return (
    <div className="App">
      <Router>
          <Header />
              <Routes>
              <Route path="/" element={<Home correctAnswers={correctAnswers} dontCorrect={dontCorrect} />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/rusarm" element={<Rusarm setCorrectAnswers={setCorrectAnswers} setDontCorrect={setDontCorrect} barer={barer[0]} />} />
                <Route path="/hayrus" element={<Hayrus setCorrectAnswers={setCorrectAnswers} setDontCorrect={setDontCorrect} haybarer={haybar[0]} />} />

                <Route path="/etymology" element={<Etymology />} />
                <Route path="/basket" element={<Basket/>} />

              </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;