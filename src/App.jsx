import About from "./sections/about/About";
import Header from "./sections/header/Header";
import Navbar from "./sections/navbar/Navbar";
import Services from "./sections/services/Services";
import Catalogue from "./sections/catalogue/Catalogue";
// import Workshop from "./sections/workshop/Workshop";
// import Testimonials from "./sections/testimonials/Testimonials";
import Whatsnew from "./sections/whatsnew/Whatsnew";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Services />
      <Catalogue />
      {/* <Workshop />
      <Testimonials /> */}
      <Whatsnew />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
