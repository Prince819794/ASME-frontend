import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cursor from "./components/Cursor";
import Crescendo from "./pages/Crescendo";

const App = () => {
  return (
    <>
      <Cursor />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/crescendo" element={<Crescendo />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
