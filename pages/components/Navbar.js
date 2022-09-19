import React from "react";
import Link from "next/link";
import Image from "next/image";
import LinkedInLogo from "../../public/linkedin_logo.svg";
import { motion } from "framer-motion";
import GitHubLogo from "../../public/github_logo.svg";
import SocialMedia from "./SocialMedia";
import Button from "./Button";

export default function Navbar({ activeLink }) {
  return (
    <motion.nav
      className="big-navbar"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          y: "0px",
          opacity: 1,
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.4,
            ease: "easeOut",
          },
        },
      }}
    >
      <div className="nav-section">
        <Link href="/">
          <a className="navbar-logo black-color">Alejandro Pérez</a>
        </Link>
        <ul className="navbar-ul medium-invis">
          <li>
            <Link href="/">
              <a
                className={
                  activeLink === "home" ? "active-link" : "unactive-link"
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
                  activeLink === "about" ? "active-link" : "unactive-link"
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
                  activeLink === "portfolio" ? "active-link" : "unactive-link"
                }
              >
                Portfolio
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

      <div className="nav-section medium-invis">
        <SocialMedia />
        <Button />
      </div>
    </motion.nav>
  );
}
