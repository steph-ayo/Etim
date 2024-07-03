import "./workshop.css";
import VideoPlayer from "../../components/VideoPlayer";
import "aos/dist/aos.css";

const Workshop = () => {
  return (
    <section id="workshop">
      <div className="workshop-container">
        <div className="text">
          <h1>Music Workshop</h1>
          <ol>
            <li>Instruments Training</li>
            <li>Vocal Training</li>
            <li>Choral Training</li>
          </ol>

          <button>REGISTER NOW</button>
        </div>

        <div className="video">
          <VideoPlayer />
        </div>
      </div>
    </section>
  );
};

export default Workshop;
