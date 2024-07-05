import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";
import Button from "../../components/Button";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleClick = () => {
    console.log("Button was clicked!");
  };

  return (
    <header id="header">
      <div className="container header__container">
        {/* <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait" />
        </div> */}
        <h1 data-aos="fade-up">ETIM VOCALS</h1>
        <p data-aos="fade-up">
          Welcome to your one-stop destination for all your music needs, where
          we seamlessly connect you to the world of melodies and rhythms.
        </p>

        <div className="header__cta" data-aos="fade-up">
          <Button onClick={handleClick}>SEND A MESSAGE</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
