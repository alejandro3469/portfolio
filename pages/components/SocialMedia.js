import React from 'react'
import Link from "next/link";
import Image from "next/image";
import LinkedInLogo from "../../public/linkedin_logo.svg";
import GitHubLogo from "../../public/github_logo.svg";
import DribbbleLogo from "../../public/dribbble-logo.svg";

export default function SocialMedia() {
  return (
    <div>
        
        <ul className="navbar-ul media-ul">
          <li>
            <Link href="https://www.linkedin.com/in/alejandro-p%C3%A9rez-22060b180/">
              <a>
                <div className="socialmedia-logo">
                  <Image
                    layout="responsive"
                    src={LinkedInLogo}
                    alt="LinkedIn logo"
                  />
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/alejandro3469">
              <a>
                <div className="socialmedia-logo">
                  <Image
                    layout="responsive"
                    src={GitHubLogo}
                    alt="LinkedIn logo"
                  />
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <div className="socialmedia-logo">
                  <Image
                    layout="responsive"
                    src={DribbbleLogo}
                    alt="LinkedIn logo"
                  />
                </div>
              </a>
            </Link>
          </li>
        </ul>
    </div>
  )
}
