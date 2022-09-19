import React from "react";
import Link from "next/link";
import Image from "next/image";
import LinkedInLogo from "../../public/linkedin_logo.svg";
import { motion } from "framer-motion";
import GitHubLogo from "../../public/github_logo.svg";
import SocialMedia from "./SocialMedia";

export default function UpperBanner() {
  return (
    <motion.div
      className="upper-banner"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          y: '0px',
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
      </div>
      <div className="nav-section medium-invis">
        <SocialMedia />
      </div>
    </motion.div>
  )
}
