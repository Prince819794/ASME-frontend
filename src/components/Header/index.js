import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import HamIcon from '../HamburgerIcon';
import './header.css'

const Header = () => {
  const [selectedItem, setSelectedItem] = useState(0)
  return (
    <div className="header">
      <img className="logo" src={logo} alt="asme-logo"></img>
      <div className="menu">
        <div
          className={`itm ${selectedItem === 0 ? "itmS" : ""}`}
          onClick={() => setSelectedItem(0)}
        >
          Events
        </div>
        <div
          className={`itm ${selectedItem === 1 ? "itmS" : ""}`}
          onClick={() => setSelectedItem(1)}
        >
          ASME e-fest
        </div>
        <div
          className={`itm ${selectedItem === 2 ? "itmS" : ""}`}
          onClick={() => setSelectedItem(2)}
        >
          Crescendo
        </div>
      </div>
      <div className="navbar">
        <HamIcon />
      </div>
    </div>
  );
}

export default Header;