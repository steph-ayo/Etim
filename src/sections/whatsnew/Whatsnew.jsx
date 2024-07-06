import BookImage from "../../assets/images/Book Image.png";
import Button from "../../components/Button";
import "./whatsnew.css";
import "aos/dist/aos.css";

const Whatsnew = () => {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Hello Etim Vocal Enterprises, I want to buy..."
    );
    window.location.href = `https://wa.me/+2348188207410?text=${message}`;
  };

  return (
    <section id="whatsnew">
      <div className="whatsnew-container">
        <div className="image" data-aos="fade-right">
          <img src={BookImage} alt="" />
        </div>
        <div className="whatsnew-text" data-aos="fade-left">
          <h1>What's New</h1>
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
