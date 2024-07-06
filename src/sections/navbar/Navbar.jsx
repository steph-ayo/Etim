import logo from "../../assets/images/logo.svg";
import data from "./data";
import "./navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia"; // Import the close icon
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <div className="container nav-container">
        <a href="index.html" className="nav-logo">
          <img src={logo} alt="logo" />
        </a>
        <ul className={`nav-menu ${menuOpen ? "show" : ""}`}>
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link} onClick={closeMenu}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <button id="nav-burger" onClick={toggleMenu}>
          {menuOpen ? <LiaTimesSolid /> : <RxHamburgerMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
