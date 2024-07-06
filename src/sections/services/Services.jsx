import data from "./data";
import "./services.css";
import ServiceCard from "./ServiceCard";
import Services2 from "../services2/Services2";

const Services = () => {
  return (
    <section id="services">
      <h2>What we do</h2>
      <h1>Our Services</h1>
      <p>
        We are available for weddings, cooperate events, birthdays, AGMs,
        Parties, Church and Religious events.
      </p>

      <div id="services-container" className="container" data-aos="fade-up">
        <div className="services1">
          {data.map((item) => (
            <ServiceCard key={item.id} className="service light">
              <div className="card-text">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button>
                  <a href={item.btnLink}>{item.btnText}</a>
                </button>
              </div>

              <div className="card-images">
                <div className="card-image">
                  <img id="main-image" src={item.image} alt="" />
                </div>
              </div>
            </ServiceCard>
          ))}
        </div>
        <div className="services2">
          <Services2 />
        </div>
      </div>
    </section>
  );
};

export default Services;
