import { useState } from "react";

import "../sass/header.scss";

import logo from "../assets/mfs-logo.jpg";
import logoNew from "../assets/logo/mfs-logo-new-white.svg";

function Header() {
  return (
    <>
      <div className="header-container">
        <div>logo</div>
        <div className="header-nav-items">
          <div>link 1</div>
          <div>link 2</div>
          <div>link 3</div>
        </div>
      </div>
    </>
  );
}

export default Header;
