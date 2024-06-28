import data from "./data";
import "./services.css";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section id="services">
      <h2>What we do</h2>
      <h1>Our Services</h1>
      <p>
        We are available for weddings, cooperate events, birthdays, AGMs,
        Parties, Church and Religious events.
      </p>

      <div
        id="services-container"
        className="container services__container"
        data-aos="fade-up"
      >
        {data.map((item) => (
          <ServiceCard key={item.id} className="service light">
            <div className="card-text">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>{item.btnText}</button>
            </div>

            <div className="card-images">
              <div className="card-image">
                <img id="main-image" src={item.image} alt="" />
              </div>
            </div>
          </ServiceCard>
        ))}
      </div>
    </section>
  );
};

export default Services;
