"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Cards from "../card/Card";
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Coursel() {
    const [cards,setCards] = useState([]);

    async function fectData(){
      try{
        const response = await axios.get('/api/admin/products/getproducts');
        setCards(response.data.products);
      }catch(error){
        console.error("product detail not found".error);
      }

    }
    useEffect(()=>{
      fectData()
    })
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: 'linear',
        arrows:false,
        responsive: [
            {
              breakpoint: 425, // Adjust this breakpoint as needed
              settings: {
                slidesToShow: 1, // Show 1 slide on small screens
              },

            }, 
            {
                breakpoint: 1440, // Adjust this breakpoint as needed
                settings: {
                  slidesToShow: 4, // Show 1 slide on small screens
                },
                
              }  
        ]   
      };
  return (<div className="flex justify-center items-center m-3 w-[84vw] md:w-[90vw] md:m-3">
    <div className="slider-container w-[80vw] md:w-[98vw] md:m-1"><Slider {...settings} className="flex justify-center items-center m-2">{cards.map((item)=>(
        <div key={item._id}><div className="bg-white h-[40]vw] w-[75vw] m-1 mb-1 md:mt-0 md:m-0 md:w-[24vw]  md:h-[24vw]  text-black rounded-xl">
            <div className=' flex justify-center items-center rounded-t-xl'>
            <img src="https://cdn.thewirecutter.com/wp-content/media/2023/09/pressure-cooker-2048px-9805.jpg" alt="Sunset in the mountains"/>
            </div>
       
        <div className="flex flex-col justify-center items-center m-1 h-[15vw] md:h-[4vw] md:m-4 ">
          <div className="flex flex-wrap text-lg font-bold md:text-xl">{item.name}</div>
          <p className="flex flex-wrap text-lg font-semibold md:text-base">
           {item.description}
          </p>
        </div>
      </div>
  
        </div>))}</Slider></div>
        </div>
  )
}
