
"use client"
import React, { useRef, useState } from 'react';
// import Swiper ,React ,components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../swiper/swiper.css'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function SwiperC() {
  return (
    <div className=''>
     <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
       <SwiperSlide><img  src="https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2018/Article-2018/8d26dba169645749d8097f7d2b4cc197_XL.jpg"/></SwiperSlide>
        <SwiperSlide><img  src="https://picsum.photos/id/1018/1200/600"/></SwiperSlide>
        <SwiperSlide><img src='https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2018/Article-2018/8d26dba169645749d8097f7d2b4cc197_XL.jpg'/></SwiperSlide>
        <SwiperSlide><img  src="https://gembah.com/wp-content/uploads/2022/07/home-kitchen-gadgets-scaled-1.jpeg"/></SwiperSlide>
        <SwiperSlide><img  src="https://picsum.photos/id/1018/1200/600"/></SwiperSlide>
        <SwiperSlide><img src='https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2018/Article-2018/8d26dba169645749d8097f7d2b4cc197_XL.jpg'/></SwiperSlide>
    </Swiper> 
    </div>
    
  );
}
