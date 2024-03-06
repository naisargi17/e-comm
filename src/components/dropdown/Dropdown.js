
'use client';
import productname from "@/context/categorydata"
import { Dropdown } from 'flowbite-react';
import Link from "next/link"
import { useRouter } from 'next/navigation';
export default function DropdownC({name}) {
  
    const router = useRouter();
  
    const handleItemClick = (route) => {
      router.push(route);
    };
    const categoryData = productname.filter(category => category.category === name);
  
  return (
    <div className='flex text-black bg-white hover:border-black focus:outline-none '>
      {categoryData.map((category, index) => (
        <div key={index}>
          <Dropdown label={category.category} inline>
            {category.items.map((product, i) => (
              <Dropdown.Item onClick={() => handleItemClick('/productdetail')}key={i}>{product.name}</Dropdown.Item>
            ))}
          </Dropdown>
        </div>
      ))}
    </div>
  );
}

 {/* <Dropdown label={name} inline >
      
      <Dropdown.Item  onClick={() => handleItemClick('/productdetail')}>Product</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown> */}




// "use client "
// import React, { useState } from 'react';

// const Dropdown = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <div className="relative">
//       <button
//         id="dropdownDefaultButton"
//         data-dropdown-toggle="dropdown"
//         className="text-black bg-white hover:bg-slate- focus:outline-none font-medium rounded-xxl text-sm px-5 py-2.5 text-center inline-flex items-center "
//         type="button"
//         onClick={toggleDropdown}
//       >
//         Dropdown button
//         <svg
//           className="w-2.5 h-2.5 ms-3"
//           aria-hidden="true"
//           fill="none"
//           viewBox="0 0 10 6"
//         >
//           <path
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="m1 1 4 4 4-4"
//           />
//         </svg>
//       </button>

//       {/* Dropdown menu */}
//       <div
//         id="dropdown"
//         className={`z-10 ${isDropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
//       >
//         <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDefaultButton">
//           <li>
//             <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//               Dashboard
//             </a>
//           </li>
//           <li>
//             <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
//               Settings
//             </a>
//           </li>
//           <li>
//             <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
//               Earnings
//             </a>
//           </li>
//           <li>
//             <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
//               Sign out
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Dropdown;
