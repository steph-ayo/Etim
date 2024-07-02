import { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "./contact.css";
import Button from "../../components/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
    console.log("Form Data Submitted:", formData);
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-text">
          <h2>We are here to help</h2>
          <h1>Contact Us</h1>
          <div className="telephone">
            <BsFillTelephoneFill />
            <a href="tel:08169878207">08169878207</a>
          </div>
          <div className="e-mail">
            <MdEmail />
            <a href="#">evenconceptsmedia@gmail.com</a>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
