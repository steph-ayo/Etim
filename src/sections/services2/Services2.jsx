import "./services2.css";
import ServiceCard from "../services/ServiceCard";
import { PiChatCircleTextBold } from "react-icons/pi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination } from "swiper/modules";

const Services2 = () => {
  return (
    <div className="services2">
      <ServiceCard className="service light">
        <div className="text">
          <h2>Concerts</h2>
          <p>
            We offer unforgettable live performances that create memories to
            last a lifetime
          </p>
          <button>
            <a href="#contact">
              Book us Now <PiChatCircleTextBold />
            </a>
          </button>
        </div>

        <div className="images">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              601: { slidesPerView: 2 },
              1025: { slidesPerView: 3 },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            autoplay={true}
            className="mySwiper"
          >
            <SwiperSlide className="musicService-card-bands">
              <div className="musicService-card-text">
                <div className="eclipse"></div>
                <h4>Bands</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide className="musicService-card-ensemble">
              <div className="musicService-card-text">
                <div className="eclipse"></div>
                <h4>Ensemble</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide className="musicService-card-evachorale">
              <div className="musicService-card-text">
                <div className="eclipse"></div>
                <h4>Eva Chorale</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide className="musicService-card-solo">
              <div className="musicService-card-text">
                <div className="eclipse"></div>
                <h4>Solo Perforances</h4>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </ServiceCard>
    </div>
  );
};

export default Services2;
