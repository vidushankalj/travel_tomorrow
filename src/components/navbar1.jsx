import React, { useState } from "react";
import "../Styles/navbar1.css";
import logo from '../../ss/Logo2 bt.png';
import searchIcon from "../assets/search-thin.svg";
import LoginSignup from './LoginSignup';
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";


function NavBar1() {
  const [open, setopen] = useState(false);
  function openform() {
    setopen(!open)
    console.log(open);
  }
  const [ismobile, setismobile] = useState(false);
  
  function handleMenuBtnClick() {
    setismobile(!ismobile);
    if (ismobile){
      document.getElementById("root").classList.remove("noscroll")
    }else document.getElementById("root").classList.add("noscroll")
  }

  return (
    <nav className="nav-container">
      <div className="logo">
        <img src={logo} alt="logo.svg" id="logo-img" />
      </div>
      <ul className={ismobile ? "link-list menu-open" : "link-list"}>
        <Link to="/" className="link-item">
          <li
            className="link-text"
            onClick={() => {
              setismobile(false);
              document.getElementById("root").classList.remove("noscroll")
            }}
          >
            Home
          </li>
        </Link>

        <Link to="/destinations" className="link-item">
          <li
            className="link-text"
            onClick={() => {
              setismobile(false);
              document.getElementById("root").classList.remove("noscroll")
            }}
          >
            Destinations
          </li>
        </Link>

        <Link to="/hotels" className="link-item">
          <li
            className="link-text"
            onClick={() => {
              setismobile(false);
              document.getElementById("root").classList.remove("noscroll")
            }}
          >
            Hotels
          </li>
        </Link>

        <Link to="/travel" className="link-item">
          <li
            className="link-text"
            onClick={() => {
              setismobile(false);
              document.getElementById("root").classList.remove("noscroll")
            }}
          >
           Events
          </li>
        </Link>
        <li className="link-text"><FaUserCircle size={"1.5rem"} className="nav-fa-user-circle" onClick={openform}/></li>
        
      
      </ul>
      <div className="nav-icons">
      
      <div className="search-bar">
          <img src={searchIcon} alt={searchIcon} id="search-icon" />
        </div>
        </div>
      
      
      <div
        className={ismobile ? "menu-btn close" : "menu-btn"}
        onClick={handleMenuBtnClick}
      >
        <span className="menu-bar" id="bar1"></span>
        <span className="menu-bar" id="bar2"></span>
        <span className="menu-bar" id="bar3"></span>
      </div>
      {open?<LoginSignup />:""}
      
    </nav>
  );
}

export default NavBar1;