import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import RandomImage from "../../public/countriesMockup.png";
import LinkedInLogo from "../../public/linkedin_logo.svg";
import GitHubLogo from "../../public/github_logo.svg";
import DribbbleLogo from "../../public/dribbble-logo.svg";

export default function Card() {
  return (
    <div className="card">
      <div className="project-image">
        <div className="project-image-container">
          <Image layout="responsive" src={RandomImage} alt="LinkedIn logo" />
        </div>
      </div>
      <div className="project-data">
        <div className="title-excerpt">
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {
                  x: 10,
                  opacity: 0,
                },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <h2 className="project-title card-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h2>
            </motion.div>
            <motion.p
              className="project-excerpt project-excerpt-card ultrasmall"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {
                  x: 10,
                  opacity: 0,
                },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    ease: "easeOut",
                  },
                },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              faucibus vestibulum erat, et scelerisque metus scelerisque nec.
            </motion.p>
          </div>
          <div className="banner-buttons">
            <Link href="#">
              <a className="project-link">
                See more
                <span className="material-symbols-outlined">arrow_outward</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
