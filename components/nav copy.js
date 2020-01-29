import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPlus,
  faAddressCard,
  faUserCircle
} from "@fortawesome/fontawesome-free-solid";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
    <a className="navbar-brand bumblr mr-auto" href="/">
      Bumblr
    </a>
    <ul className="navbar-nav mr-auto">
      <Link href="/">
        <li className="nav-item">
          <a className="nav-link text-center h4" href="/blogs">
            <FontAwesomeIcon icon={faHome} width="1.5rem"></FontAwesomeIcon>
            <br></br>
            Home
          </a>
        </li>
      </Link>
      <Link href="/createBlog">
        <li className="nav-item">
          <a className="nav-link h4 text-center" href="/blogs">
            <FontAwesomeIcon icon={faPlus} width="1.5rem"></FontAwesomeIcon>
            <br></br>
            Create Blog
          </a>
        </li>
      </Link>
      <Link href="/about">
        <li className="nav-item">
          <a className="nav-link h4 text-center" href="/blogs">
            <FontAwesomeIcon
              icon={faAddressCard}
              width="1.5rem"
            ></FontAwesomeIcon>
            <br></br>
            About Me
          </a>
        </li>
      </Link>
      <Link href="/profile">
        <li className="nav-item">
          <a className="nav-link h4 text-center" href="/blogs">
            <FontAwesomeIcon
              icon={faUserCircle}
              width="1.5rem"
            ></FontAwesomeIcon>
            <br></br>
            Your Profile
          </a>
        </li>
      </Link>
    </ul>
    <style jsx>{`
      nav {
        background-color: #2bbbad;
      }
      .bumblr {
        font-size: 1.8rem !important;
      }
      li a {
        color: rgba(255, 255, 255, 0.88) !important;
        width: 150px;
      }
      li a:hover {
        color: rgba(50, 55, 55, 1) !important;
        transition: all 0.3s ease;
        // box-shadow: 0 4px 6px 0 black;
      }
    `}</style>
  </nav>
);

export default Nav;