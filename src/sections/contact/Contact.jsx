import { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
// import emailjs from "emailjs-com";
import "./contact.css";
// import Button from "../../components/Button";

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

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
  //     .then(
  //       (response) => {
  //         console.log("SUCCESS!", response.status, response.text);
  //         alert("Your message has been sent!");
  //       },
  //       (err) => {
  //         console.log("FAILED...", err);
  //         alert("There was an error sending your message.");
  //       }
  //     );
  // };

  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-text">
          <h2>We are here to help</h2>
          <h1>Contact Us</h1>
          <div className="telephone">
            <BsFillTelephoneFill />
            <a href="tel:08169878207"> +2348024033363</a>
          </div>
          <div className="whatsapp">
            <IoLogoWhatsapp />
            <a href="tel:08169878207"> +2348188207410</a>
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
