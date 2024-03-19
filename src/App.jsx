import React from "react";
import Header from "./components/header/Header.jsx";
import Container from "./components/container/Container.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BiologicalSciences from "./pages/Biological Sciences/BiologicalSciences.jsx";
import Naturalsciences from "./pages/Natural sciences/Naturalsciences.jsx";
import Geosciences from "./pages/Geosciences/Geosciences.jsx";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/naturalsciences" element={<Naturalsciences />} />
          <Route path="/biologicalsciences" element={<BiologicalSciences />} />
          <Route path="/geosciences" element={<Geosciences />} />


        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;

