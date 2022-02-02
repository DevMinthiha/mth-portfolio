import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation } from "swiper";
import movieMaster from "./movie-master-photo.png";
import robinStore from "./robin-store.png";
import foodie from "./foodie.png";
import profileWebsite from "./profile-website.png";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={1.6}
      // navigation={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
    >
      <SwiperSlide>
        <h1 className="mr-auto font-bold text-sm md:text-xl">
          <span className="md:text-5xl text-red-500">01</span> - Movie
          <span className="text-red-500">Master</span>
        </h1>
        <a
          href="https://movie-master-tau.vercel.app/"
          rel="noreferrer"
          target={"_blank"}
        >
          <img src={movieMaster} className="rounded-2xl shadow-lg" alt="" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <h1 className="mr-auto font-bold text-sm md:text-xl">
          <span className="md:text-5xl text-yellow-500">02</span> -
          Robin<span className="text-red-500">Store</span>
        </h1>
        <a
          href="https://react-robinstore.herokuapp.com/"
          rel="noreferrer"
          target={"_blank"}
        >
          <img src={robinStore} className="rounded-2xl shadow-lg" alt="" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <h1 className="mr-auto font-bold text-sm md:text-xl">
          <span className="md:text-5xl text-green-500">03</span> -
          Foodie
        </h1>
        <a
          href="https://devminthiha.github.io/Foodie-Project/"
          rel="noreferrer"
          target={"_blank"}
        >
          <img src={foodie} className="rounded-2xl shadow-lg" alt="" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <h1 className="mr-auto font-bold text-sm md:text-xl">
          <span className="md:text-5xl text-purple-500">04</span> -
          Profile Website
        </h1>
        <a
          href="https://devminthiha.github.io/profile-website/project/index.html"
          rel="noreferrer"
          target={"_blank"}
        >
          <img
            src={profileWebsite}
            className="rounded-2xl shadow-lg"
            alt=""
          />
        </a>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
