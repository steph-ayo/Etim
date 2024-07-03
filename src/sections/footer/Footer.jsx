// import data from "./data";
import { IoMdArrowRoundUp } from "react-icons/io";
import Imagelogo from "../../assets/images/logo.svg";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./footer.css";
import "aos/dist/aos.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container" data-aos="fade-up">
        {/* FOOTER TOP */}
        <div className="footer-top">
          {/* {data.map((item) => (
            <div key={item.id}>
              <img src={item.icon} alt="" />
              <p>{item.name}</p>
            </div>
          ))} */}
        </div>

        {/* FOOTER MAIN */}
        <div className="footer-main">
          {/* FOOTER MAIN----LOGO */}
          <div className="logo">
            <img src={Imagelogo} alt="Etim vocal enterprises logo" />
            <div className="logo-contact">
              <div className="logo-contact-mail">
                {" "}
                <MdEmail />
              </div>
              <div className="logo-contact-telephone">
                {" "}
                <BsFillTelephoneFill />
              </div>
            </div>
          </div>

          <div id="footer-main-text">
            {/* FOOTER MAIN----SERVICES */}
            <div className="ourServices">
              <h4>
                <a href="#ourservices">Our Services</a>
              </h4>
              <p>Sales/Rentals</p>
              <p>Trainings & Workshop</p>
              <p>Concerts</p>
            </div>

            {/* FOOTER MAIN----CONCERTS */}
            <div className="concerts">
              <h4>
                <a href="#ourservices">Concerts</a>
              </h4>
              <p>Bands</p>
              <p>Essemble</p>
              <p>Eva chorale</p>
              <p>Solo Performance</p>
            </div>

            {/* FOOTER MAIN----EXPLORE CATEGORIES*/}
            <div className="explore-categories">
              <h4>
                <a href="#ourproducts">Explore-categories</a>
              </h4>
              <p>Stringed Instruments</p>
              <p>Brass Instruments</p>
              <p>Woodwind Instruments</p>
              <p>Solo Performance</p>
            </div>

            {/* FOOTER MAIN----WORKSHOPS */}
            <div className="workshops">
              <h4>
                <a href="#workshop">Workshops</a>
              </h4>
              <p>Instruments Trainings</p>
              <p>Vocal Training</p>
              <p>Choral Training</p>
            </div>
          </div>

          {/* FOOTER MAIN----SCROLL-CONTROL */}
          <div className="scroll-control">
            <IoMdArrowRoundUp id="scroll-icon" />
          </div>
        </div>
        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          <div>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
          <p>Etim Vocal Enterprises (c) 2024. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
