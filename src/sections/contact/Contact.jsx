import { useState, useRef } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
// import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log("Sending email with the following data:", formData);

  //   emailjs
  //     .sendForm(
  //       "service_1whh84n",
  //       "template_3tpt1uo",
  //       form.current,
  //       "QIRyKOvTaRhxEuaoQ"
  //     )
  //     .then(
  //       (result) => {
  //         console.log("SUCCESS!", result.text);
  //         alert("Message sent successfully!");
  //         // Clear the form after successful submission
  //         setFormData({ from_name: "", from_email: "", message: "" });
  //       },
  //       (error) => {
  //         console.error("FAILED...", error);
  //         alert(
  //           `Failed to send message. Error: ${error.text || error.message}`
  //         );
  //       }
  //     );
  // };

  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-text">
          <h2>We are here to help</h2>
          <h1>Contact Us</h1>
          <div className="contact-info">
            <div className="telephone">
              <BsFillTelephoneFill />
              <a href="tel:08169878207"> +2348024033363</a>
            </div>
            <div className="whatsapp">
              <IoLogoWhatsapp />
              <a
                href="https://wa.me/2348188207410"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                +2348188207410
              </a>
            </div>
            <div className="e-mail">
              <MdEmail />
              <a href="mailto:evenconceptsmedia@gmail.com">
                evenconceptsmedia@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          {/* <form ref={form} onSubmit={handleSubmit}> */}
          <form ref={form}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="from_name"
                placeholder="Name"
                value={formData.from_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="from_email"
                placeholder="Email"
                value={formData.from_email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
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
