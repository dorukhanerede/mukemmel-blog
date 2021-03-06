import Link from "next/link";
import Nav from "./nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faGit
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <section className="header">
      <Nav></Nav>
      <div className="hero">
        <h1 className="hero-profile">
          <img
            className="hero-profile-picture"
            src="/pp.jpg"
            alt="Profile Picture"
            height="120"
            width="120"
          />
        </h1>
        <div className="hero-social-information">
          <h1 className="hero-title">Dorukhan Nerede</h1>
          <div className="hero-social-links">
            <a
              className="social-link"
              title="@dorukhannerede"
              target="_blank"
              href="https://instagram.com/dorukhannerede/"
            >
              <FontAwesomeIcon
                width="21px"
                icon={faInstagram}
              ></FontAwesomeIcon>
              <p>@dorukhannerede</p>
            </a>
            <a
              className="social-link"
              title="Dorukhan Nerede"
              href="https://www.linkedin.com/in/dorukhan-nerede-441ba9161/"
              target="_blank"
            >
              <FontAwesomeIcon
                width="21px"
                icon={faLinkedinIn}
              ></FontAwesomeIcon>
              <p>Dorukhan Nerede</p>
            </a>
            <a
              className="social-link"
              title="@dorukhanerede"
              href="https://github.com/dorukhanerede"
              target="_blank"
            >
              <FontAwesomeIcon width="21px" icon={faGit}></FontAwesomeIcon>
              <p>@dorukhanerede</p>
            </a>
          </div>
        </div>
        <style jsx>{`
          .hero {
            text-align: center;
            padding: 70px 0 32px 0;
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          .hero-profile-picture {
            border-radius: 50%;
          }
          .hero-social-links {
            text-align: center;
            display: flex;
          }
          .hero-social-information {
            text-align: left;
            margin-left: 6px;
          }
          .social-link {
            margin-right: 30px;
            font-size: 18px;
            display: flex;
            flex-direction: row;
            text-decoration: none;
            align-items: center;
          }
          .social-link > p {
            margin-left: 6px;
            margin-bottom: 0;
          }

          .hero-title {
            font-size: 48px;
            margin-bottom: 1px;
          }
        `}</style>
      </div>
    </section>
  );
}
