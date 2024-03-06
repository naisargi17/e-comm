"use client"
import { useRouter } from 'next/navigation';
const Cards = () => {
   
    const router = useRouter();

    const handleChange = (category) => {
      router.push(`/login`);
    };
   
    return ( 
      
        <div onClick={handleChange} className="max-w-[29vw]  m-3  rounded overflow-hidden shadow-lg">
          
  <img className="w-full" src="https://cdn.thewirecutter.com/wp-content/media/2023/09/pressure-cooker-2048px-9805.jpg" alt="Sunset in the mountains"/>
  <div className="flex flex-col max-sm:w-[23vw] h-[15vw] justify-center items-center px-6 py-4">
    <div className=" font-bold text-xl mb-2 ">Title</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, l.
    </p>
    <span className=" px-3 py-3 text-sm font-semibold text-gray-700 mr-5 mb-2">item no</span>
  </div>
</div>
     );
    }     

 
export default Cards;