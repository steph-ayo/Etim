import data from "./data";
import "./about.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        {data.map((item) => (
          <div key={item.id} className="about__item">
            <img src={item.image} alt={item.title} />
            <h4 className="about-item-title">{item.title}</h4>
            <p className="about-item-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
