"use client";
import Cards from "@/components/card/Card";
import React from "react";
import { useRouter } from "next/navigation";
import DropdownC from "@/components/dropdown/Dropdown";
import { useState } from "react";
import categoryData from "@/context/categorydata"; // Corrected import and variable name

const CategoryPage = () => {
  const router = useRouter();

  const [showMore, setShowMore] = useState(false);
  const categoriesArray = Array.isArray(categoryData) ? categoryData : [];
  const displayedCategories = showMore ? categoriesArray : categoriesArray.slice(0, 3); // Corrected variable name

  const handleClick = (category) => {
    router.push(`/category/${category}`);
  };

  return (
    <div className="flex flex-col justify-end">
      <h1 className="flex justify-center items-center text-2xl py-4 font-semibold">
        Categories
      </h1>
      <div className="flex flex-row flex-wrap m-5 space-x-5 ">
        {categoryData.map((item,index)=>(
          <div key={index} >
          <DropdownC name={item.category}/>
          </div>
        ))} 
      
      </div>
      <div className="flex">
        <div className=" flex flex-wrap ">
          <button
            data-drawer-target="default-sidebar"
            data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar"
            type="button"
            className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <aside
            id="default-sidebar"
            className="w-64 z-40 p-4 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
          >
            <h2 className="flex text-xl font-bold mb-4 justify-center items-center">
              Categories
            </h2>
            <ul className="flex flex-col space-y-2 font-medium justify-start m-3">
              {displayedCategories.map((category, index) => (
                <li key={index} className="flex flex-row justify-between items-center ">
                  <h4>{category.category}</h4>
                  <p className="flex">{category.items.length}</p>
                </li>
              ))}
            </ul>
            {categoryData.length > 1 && (
              <button
                className="text-slate-500 cursor-pointer"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            )}
          </aside>
        </div>
        <div className="flex flex-wrap">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;



// "use client";
// import Cards from "@/components/card/Card";
// import React from "react";
// import { useRouter } from "next/navigation";
// import Dropdown from "@/components/dropdown/Dropdown";
// import Link from 'next/link';
// import { useState } from "react";

// const CategoryPage = async ({ }) => {
//   const router = useRouter();
  
//   const [showMore, setShowMore] = useState(false);
  

//   const handleClick = (category) => {
//     router.push(`/category/${category}`);
//   };
//   const categorys = {
//     Candies: [
//       { name: 'Lollipop' },
//       { name: 'Chocolate' },
//       { name: 'Gummy Bears' },
//     ],
//     Digestive: [
//       { name: 'Ginger Chews' },
//       { name: 'Peppermints' },
//       { name: 'Anise Seeds' },
//     ],
//     MouthFreshener: [
//       { name: 'Mints' },
//       { name: 'Cardamom Seeds' },
//       { name: 'Fennel Seeds' },
//     ],
//   };
//   //const displayedCategories = showMore ? categorys : categorys.slice(0, 3);
//   // const categorys= {[
//   //   {
//   //     name: 'Candies',
//   //     items: [
//   //       { name: 'Lollipop' },
//   //       { name: 'Chocolate' },
//   //       { name: 'Gummy Bears' },
//   //     ],
//   //   },
//   //   {
//   //     name: 'Digestive',
//   //     items: [
//   //       { name: 'Ginger Chews' },
//   //       { name: 'Peppermints' },
//   //       { name: 'Anise Seeds' },
//   //     ],
//   //   },
//   //   {
//   //     name: 'Mouth Freshener',
//   //     items: [
//   //       { name: 'Mints' },
//   //       { name: 'Cardamom Seeds' },
//   //       { name: 'Fennel Seeds' },
//   //     ],
//   //   },
    
//   // ]}
//   return (
//     <div className="flex flex-col justify-end">
//       <h1 className="flex justify-center items-center text-2xl py-4 font-semibold">
//         Categories
//       </h1>
//       <div className="flex flex-row flex-wrap px-2 py-2 space-x-2 ">
//         <Dropdown />
//         <Dropdown />
//         <Dropdown />
//         <Dropdown />
//       </div>
//       <div className="flex ">
//         <div className="">
//         <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
//    <span class="sr-only">Open sidebar</span>
//    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
//    </svg>
// </button>
//         <aside id="default-sidebar" className="w-64 z-40  p-4 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
//       <h2 className=" flex text-xl font-bold mb-4 justify-center items-center">Categories</h2>
//        <ul className=" flex flex-col space-y-2 font-medium justify-start m-3">
        
//         {categorys.map((category, index) => (
//           <li key={index} className="flex flex-col ">
//             <h4>{category.name}</h4>
//             <ul>
//           {categorys.items.map((item, index) => (
//             <li key={index}>{`${index + 1}. ${item.name}`}</li>
//           ))}
//           </ul>
//           </li>
//         ))}

//        </ul>
//        {categorys.length > 2 && (
//         <button
//           className="text-slate-500  cursor-pointer"
//           onClick={() => setShowMore(!showMore)}
//         >
//           {showMore ? 'Show Less' : 'Show More'}
//         </button>
//       )}
//     </aside>
//         </div>
//         <div className=" flex flex-wrap ">
//           <Cards/>
//           <Cards/>
//           <Cards/>
//           <Cards/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;
