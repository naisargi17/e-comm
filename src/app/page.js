//import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import Cards from "@/components/card/Card";
import SwiperC from "@/components/swiper/swiper";
import Coursel from "@/components/homecoursel/coursel";
export default function Home() {
  return (
    <div className="">
      <div className="">
      <SwiperC/> 
      </div>
      
      <div className="flex flex-col justify-center items-center m-2">
        <h1 className=" flex justify-center items-center text-pretty font-bold text-3xl pt-9  font-serif"> HOME </h1>
      <div className=" flex justify-center items-center  w-[90vw]">
       <Coursel/>
      </div>
      <img className=" flex justify-center items-center w-screen h-68"src="https://img.freepik.com/free-vector/flat-design-local-market-sale-banner_23-2149403170.jpg"/>
      <h1   id="category"className="flex justify-center items-center text-3xl font-bold py-5">Categories</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center m-3">
        <Cards/>
      </div>
      <img className=" flex-row justify-center items-center w-screen h-68"src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202310/untitled_-_2023-09-26t192219-sixteen_nine.jpg?size=948:533"/>
      <h1 className="flex justify-center items-center text-3xl font-bold py-8">Festival Catalogs</h1>
      <div className="flex flex-wrap  justify-center  items-center m-4  ">
      <Coursel/>
        
      </div>
    </div>
  );
}
