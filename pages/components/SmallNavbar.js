import React from "react";
import { useState } from "react";
import Image from "next/image";
import LinkedInLogo from "../../public/linkedin_logo.svg";
import GitHubLogo from "../../public/github_logo.svg";
import DribbbleLogo from "../../public/dribbble-logo.svg";
import Link from "next/link";

export default function SmallNavbar({ activeLink }) {
  const [dropdownIsVisible, setDropdownIsVisible] = useState(false);

  const toggle = () => {
    setDropdownIsVisible(!dropdownIsVisible);
    console.log(dropdownIsVisible);
  };

  return (
    <nav className="small-navbar">
      <div>
        <Link href="#">
          <a className="navbar-logo">Alejandro Pérez</a>
        </Link>
      </div>
      <div className="button-hamburger">
        <div onClick={toggle}>
          <span className="material-symbols-outlined">menu</span>
        </div>
      </div>
      <div
        className={`dropdown-menu ${
          dropdownIsVisible ? "visible" : "invisible"
        }`}
      >
        <div className="dropdown-section">
          <div className="menu-section">
            <h4>Navigation</h4>
            <ul>
              <li>
                <Link href="/">
                  <a
                    className={
                      activeLink === "blog" ? "active-link" : "unactive-link"
                    }
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a
                    className={
                      activeLink === "blog" ? "active-link" : "unactive-link"
                    }
                  >
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <a
                    className={
                      activeLink === "blog" ? "active-link" : "unactive-link"
                    }
                  >
                    Projects
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a
                    className={
                      activeLink === "blog" ? "active-link" : "unactive-link"
                    }
                  >
                    Blog
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="menu-section">
            <h4>Social media</h4>
            <ul>
              <li>
                <Link href="https://www.linkedin.com/in/alejandro-p%C3%A9rez-22060b180/">
                  <a className="link-small-socialm">
                    <div className="socialmedia-logo">
                      <Image
                        layout="responsive"
                        src={LinkedInLogo}
                        alt="LinkedIn logo"
                      />
                    </div>
                    LinkedIn
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://github.com/alejandro3469">
                  <a className="link-small-socialm">
                    <div className="socialmedia-logo">
                      <Image
                        layout="responsive"
                        src={GitHubLogo}
                        alt="LinkedIn logo"
                      />
                    </div>
                    GitHub
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="link-small-socialm">
                    <div className="socialmedia-logo">
                      <Image
                        layout="responsive"
                        src={DribbbleLogo}
                        alt="LinkedIn logo"
                      />
                    </div>
                    Dribbble
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
