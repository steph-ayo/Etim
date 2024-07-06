import "./workshop.css";
import VideoPlayer from "../../components/VideoPlayer";
import "aos/dist/aos.css";

const Workshop = () => {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Hello Etim Vocal Enterprises, I want to register for..."
    );
    window.location.href = `https://wa.me/+2348188207410?text=${message}`;
  };

  return (
    <section id="workshop">
      <div className="workshop-container">
        <div className="text">
          <h1>Music Workshop</h1>
          <ol>
            <li data-aos="zoom-in-right">Instruments Training</li>
            <li data-aos="zoom-in-left">Vocal Training</li>
            <li data-aos="zoom-in-right">Choral Training</li>
          </ol>

          <button onClick={handleClick}>REGISTER NOW</button>
        </div>

        <div className="video">
          <VideoPlayer />
        </div>
      </div>
    </section>
  );
};

export default Workshop;
