import Card from "../../components/Card";
import MusicIcon from "../../assets/images/musicIcon.svg";

const Testimonial = ({ testimonial }) => {
  return (
    <Card className="testimonial-card">
      <img src={MusicIcon} alt="" className="music-icon" />
      <p>{testimonial.quote}</p>
      <div className="testimonial__client">
        <div className="testimonial__client-avatar">
          <img src={testimonial.avatar} alt="testimonial Avatar" />
        </div>
        <div className="testimonial__client-details">
          <h5>{testimonial.name}</h5>
          <small>{testimonial.profession}</small>
        </div>
      </div>
    </Card>
  );
};

export default Testimonial;
