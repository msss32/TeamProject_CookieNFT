import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Brave, ClottedCream, FrostQueen, GoldCheese, HollyBerry, Muscle, MoonLight, PureVanilla, Princess } from "../image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../style/slide.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function MainSlide() {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        slidesPerView={4}
        spaceBetween={5}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Brave} alt="용감한 쿠키" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Princess} alt="공주맛 쿠키" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ClottedCream} alt="클로티드크림맛 쿠키" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={FrostQueen} alt="서리여왕 쿠키" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={GoldCheese} alt="골드치즈맛 쿠키" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HollyBerry} alt="홀리베리 쿠키" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Muscle} alt="근육맛 쿠키" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MoonLight} alt="달빛술사 쿠키" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={PureVanilla} alt="퓨어바닐라 쿠키" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
