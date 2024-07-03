import BookImage from "../../assets/images/Book Image.png";
import Button from "../../components/Button";
import "./whatsnew.css";
import "aos/dist/aos.css";

const Whatsnew = () => {
  const handleClick = () => {
    console.log("Button was clicked!");
  };

  return (
    <section id="whatsnew">
      <div className="whatsnew-container">
        <div className="image" data-aos="fade-right">
          <img src={BookImage} alt="" />
        </div>
        <div className="text" data-aos="fade-left">
          <h1>Whats New</h1>
          <p>
            Unlock the full potential of your singing voice. This is the
            ultimate guide for vocalists of all levels. Get your copy of{" "}
            <span>"Vocal Upgrade"</span> today
          </p>

          <Button onClick={handleClick}>BUY NOW</Button>
        </div>
      </div>
    </section>
  );
};

export default Whatsnew;
