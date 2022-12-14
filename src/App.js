import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cursor from "./components/Cursor";
import Crescendo from "./pages/Crescendo";
import EFest from "./pages/EFest";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Cursor />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/crescendo" element={<Crescendo />} />
        <Route path="/e-fest" element={<EFest />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
