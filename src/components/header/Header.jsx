import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  let td = true;
  const get = () => {
    if (td === true) {
      let ul = document.querySelector("header  .menu-i");
      ul.style.transform = "translateY(40px)";
      let menu = document.getElementById("menu");
      menu.style.transform = "rotate(-180deg)";
      td = false;
    } else {
      let ul = document.querySelector("header  .menu-i");
      ul.style.transform = "translateY(-1000px)";
      let menu = document.getElementById("menu");
      menu.style.transform = "rotate(180deg)";
      td = true;
    }
  };

  return (
    <>
      <header>
        <a href="/" className="logo">
          University of Science
        </a>
        <ul className="menu-i">
          <a href="/">Home</a>
          <a href="/#about">About</a>
          <a href="/#roudmap">Roudmap</a>
          <a href="/#videos">videos</a>
          <a href="/#summaries">summaries</a>




 
        </ul>
        <i className="fa-solid fa-bars menu" id="menu" onClick={get}></i>
      </header>
    </>
  );
}

export default Header;
