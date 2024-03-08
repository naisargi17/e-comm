"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Cards = () => {
   
    const router = useRouter();
    const[title,setTitle]=useState("");
    const[description,setDescription] = useState("");
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
    const handleChange = (category) => {
      router.push(`/login`);
    };
   
    return ( 
      <div className='flex flex-wrap justify-center items-center'>
      {cards.map((item)=>(
      <div key={item._id}><div onClick={()=>handleChange(item.category)} className="w-[39vw] h-[39vw] m-1 md:w-[30vw] md:h-[30vw] rounded overflow-hidden shadow-lg">
          
      <img className="w-[100vw]" src="https://cdn.thewirecutter.com/wp-content/media/2023/09/pressure-cooker-2048px-9805.jpg" alt="Sunset in the mountains"/>
      <div className="flex flex-col justify-center items-center h-[15vw] md:h-[10vw]">
        <div className=" flex justify-center items-center font-bold text-base  md:text-2xl md:m-2">{item.name}</div>
        <p className="flex justify-center items-center text-gray-700 text-xs md:text-lg">
         {item.description}
        </p>
      </div>
    </div>

      </div>))}
      </div>
     );
    }     

 
export default Cards;