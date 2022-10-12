import React,  { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Portrait from "../../public/portrait.jpg";

export default function Banner() {
  const [copied, setCopied] = useState(false)
  const copyToClipboard = () => {
    navigator.clipboard.writeText("alejandro.perez3469@gmail.com");
    setCopied(true)
  };
  return (
    <div className="card">
      <div className="project-data">
        <div className="title-excerpt">
          <div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  x: -10,
                  opacity: 0,
                },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.4,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <h2 className="project-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h2>
            </motion.div>
            <motion.p
              className="project-excerpt ultrasmall"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  x: -10,
                  opacity: 0,
                },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.8,
                    ease: "easeOut",
                  },
                },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              orci dolor, aliquam at viverra a, sollicitudin sed neque. Donec
              dictum mi at ipsum pretium varius quis ut lectus. amet ipsum ac
              rhoncus.
            </motion.p>
          </div>
          <div className="banner-buttons">
            <span className="small-devices">
              <Link href="#">
                <a className="project-link">
                  About me
                  <span className="material-symbols-outlined">
                    arrow_outward
                  </span>
                </a>
              </Link>
            </span>
            <span className="big-devices">
              <div className="copy-item" onClick={copyToClipboard}>
                <div className="copy-email">alejandro.perez3469@gmail.com</div>
                <div>
                <div className={`button2 copy-button ${copied && 'invissible'}`}>
                  <span className="material-symbols-outlined">
                    content_copy
                  </span>
                  Copy
                </div>
                <div className={`button2 copy-button ${!copied && 'invissible'}`}>
                  <span className="material-symbols-outlined">
                    done
                  </span>
                  Copied
                </div>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="project-image banner-image">
        <div className="project-image-container">
          <Image layout="responsive" src={Portrait} alt="LinkedIn logo" />
          <p>
            Photo by{" "}
            <a href="https://unsplash.com/@vhladynets?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Vicky Hladynets
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/s/photos/man-portrait?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
