import React, { useState } from "react";
import logo from "../../assets/logo.png";
import HamIcon from "../HamburgerIcon";
import { useLocation, useNavigate } from "react-router-dom";
import "./header.css";
import { useEffect } from "react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(0);
  useEffect(() => {
    if (location.pathname === "/") {
      setSelectedItem(0);
    } else if (location.pathname === "/e-fest") {
      setSelectedItem(1);
    } else if (location.pathname === "/crescendo") {
      setSelectedItem(2);
    }
  }, [location.pathname]);
  return (
    <div className="header">
      <img className="logo" src={logo} alt="asme-logo"></img>
      <div className="menu">
        <div
          className={`itm ${selectedItem === 0 ? "itmS" : ""}`}
          onClick={() => navigate("/")}
        >
          Events
        </div>
        <div
          className={`itm ${selectedItem === 1 ? "itmS" : ""}`}
          onClick={() => navigate("/e-fest")}
        >
          ASME e-fest
        </div>
        <div
          className={`itm ${selectedItem === 2 ? "itmS" : ""}`}
          onClick={() => navigate("/crescendo")}
        >
          Crescendo
        </div>
      </div>
      <div className="navbar">
        <HamIcon />
      </div>
    </div>
  );
};

export default Header;
