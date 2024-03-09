// "use client";
// import { useRouter } from 'next/navigation';
// import {Card} from "flowbite-react"
// import { useDispatch, useSelector } from "react-redux";

// import { showProduct,deleteProduct } from "@/redux/silces/productSlice";
// import { useEffect, useState } from "react";



// const all = () => {
//   const dispatch = useDispatch();
// //   const router = useRouter();

// // const handleButtonClick = (id) => {
 
// //   router.push(`/edit/${id}`);
// // };
// //   const [id, setId] = useState();
//   const { products, loading,error,searchData} = useSelector((state) => state.app);
//   useEffect(() => {
//     dispatch(showProduct());
//   }, []);
//   if (loading) {
//     return <h2>Loading</h2>;
//   }
//   if(error){
//     return<div>Error :{error}</div>
//   }
//   console.log(products);
//   if (error) {
//     return <div>Error: {error.message}</div>;
//     // Display specific information from the error object, such as error.message
//   }
//   return (<div className=" flex m-4 justify-center items-center w-[25vw] border border-black">

//     <Card
//       className="max-w-xxl"
//     >
//         {products && products.map((ele)=>(
//             <div className="flex flex-col p-2 border border-black justify-center items-center"> 
//                 <h5 className="text-2xl font-bold tracking-tight text-gray-900">
//             {ele.name}
//           </h5>
//           <p className="font-normal text-gray-700 ">
//             {ele.quantity}
//           </p>
//           <p className="font-normal text-gray-700 ">
//             {ele.category}
//           </p>
//           <p className="font-normal text-gray-700 ">
//             {ele.description}
//           </p>
//           <p className="font-normal text-gray-700 ">
//             {ele.price}
//           </p>
//           <p>{ele.id}</p>
//           <div className=" flex text-xxl font-bold space-x-8">  <button>View</button>
//             <a href={`/edit/${ele.id}`} >Edit</a>
//             <button onClick={()=> dispatch(deleteProduct(ele.id))} >Delete</button> </div>
                
//                     </div>
                    
            

//         ))}
      
//     </Card>
//     </div>
// //   

//   );
  
// };

// export default all;
