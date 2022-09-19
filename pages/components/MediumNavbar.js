import React from "react";

import { useState } from "react";

import Link from "next/link";

export default function MediumNavbar() {
    

  const [dropdownIsVisible, setDropdownIsVisible] = useState(false)
  
  const toggle = () => {
    setDropdownIsVisible(!dropdownIsVisible);
    console.log(dropdownIsVisible);
  };
  return (
    <nav className="medium-navbar">
      <div>
        <Link href="#">
          <a className="navbar-logo">lOGO</a>
        </Link>
      </div>
      <div onClick={toggle}>
        <span className="material-symbols-outlined">menu</span>
      </div>
      <div
        className={`dropdown-menu ${dropdownIsVisible ? "" : "invisible"}`}
      ></div>
    </nav>
  );
}
