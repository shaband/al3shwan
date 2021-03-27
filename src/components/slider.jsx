import React, { useState } from 'react'
import Swiper from 'react-id-swiper';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



export default function Slider({children,config={}})
{
  
const settings = {
     slidesPerView: 3,
     centeredSlides: true,
     loop: true,
     pagination: {
     el: '.swiper-pagination',
     clickable: true,
     // dynamicBullets: true,
  
     },
      breakpoints: {
        1024: {
          slidesPerView: 3,
          
        },
        768: {
          slidesPerView: 3,
         
        },
        640: {
          slidesPerView: 2,
         
        },
        320: {
          slidesPerView: 1,
        }
      },
      ...config
}


return (
     <div className="block py-7">
     <Swiper {...settings}>
         {children}
     </Swiper>
     </div>
);

}