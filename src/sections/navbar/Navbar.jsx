import logo from "../../assets/images/logo.svg";
import data from "./data";
import "./navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav-container">
        <a href="index.html" className="nav-logo">
          <img src={logo} alt="logo"></img>
        </a>
        <ul className="nav-menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button id="nav-burger" onClick="#">
          <RxHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
