import React, { useState } from "react";

function Header() {
  const [sideBarOpen, setSlideBarOpen] = useState(false);
  function showMenu(e) {
    e.preventDefault();
    setSlideBarOpen(true);
  }
  return (
    <header>
      <img src="teslaImages/logo.svg" alt="Logo" />
      <ul>
        <li>
          <a href="">Modal S</a>
        </li>
        <li>
          <a href="">Modal 3</a>
        </li>
        <li>
          <a href="">Modal X</a>
        </li>
        <li>
          <a href="">Modal Y</a>
        </li>
        <li>
          <a href="">Solar Roof</a>
        </li>
        <li>
          <a href="">Solar Panel</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="">Shop</a>
        </li>
        <li>
          <a href="">Account</a>
        </li>
        <li>
          <a href="" onClick={showMenu}>
            Menu
          </a>
        </li>
      </ul>
      <ul className="sideBar" style={{ right: sideBarOpen ? 0 : "-250px" }}>
        <li>
          <a href="">Modal-S</a>
        </li>
        <li>
          <a href="">Modal-3</a>
        </li>
        <li>
          <a href="">Modal-X</a>
        </li>
        <li>
          <a href="">Modal-Y</a>
        </li>
        <li>
          <a href="">Solar roof</a>
        </li>
        <li>
          <a href="">Solar Panel</a>
        </li>
        <li>
          <a href="">Existing Inventory</a>
        </li>
        <li>
          <a href="">Used Inventory</a>
        </li>
        <li>
          <a href="">Trade In</a>
        </li>
        <li>
          <a href="">Test drive</a>
        </li>
        <li>
          <a href="">Power wall</a>
        </li>
        <li>
          <a href="">Commerical Energy</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
