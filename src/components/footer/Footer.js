// // Import necessary modules and components if needed



'use client';

import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

 export default function FooterC() {
  return (
    <div className="">
    <Footer  className='bg-gray-100 '>
      <div className="md:w-[100vw]">
        <div className="grid  justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="/"
              src=""
              alt=""
              name="Indian Kitchen Mart"
            />
          </div>
          <div className="grid grid-cols-2  m-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="/about">About</Footer.Link>
                <Footer.Link href="/location">Location</Footer.Link>
              </Footer.LinkGroup>
            </div>
           
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className=" flex items-center justify-between m-1">
          <Footer.Copyright href="#" by="Indian kitchen Mart™" year={2022} />
          <div className="m-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
    </div>
  );
}

// const Footer = () => {
//   return (
//     <footer className="bg-[#EEEDEB] ">
//       <div className="mx-auto w-full max-w-screen-xl">
//         <div className="grid grid-cols-2  m-3 gap-2 px-5 py-4 lg:py-2 md:grid-cols-4">
//           <div>
//             <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Company</h2>
//             <ul className="text-gray-500 font-medium">
//               <li className="mb-4">
//                 <a href="/about" className="hover:underline">About</a>
//               </li>
//               <li className="mb-4">
//                 <a href="/contact" className="hover:underline">Contact</a>
//               </li>
//               <li className="mb-4">
//                 <a href="#" className="hover:underline">Brand Center</a>
//               </li>
//               <li className="mb-4">
//                 <a href="#" className="hover:underline">Blog</a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Company</h2>
//             <ul className="text-gray-500 font-medium">
//               <li className="mb-4">
//                 <a href="/about" className="hover:underline">About</a>
//               </li>
//               <li className="mb-4">
//                 <a href="/contact" className="hover:underline">Contact</a>
//               </li>
//               <li className="mb-4">
//                 <a href="#" className="hover:underline">Brand Center</a>
//               </li>
//               <li className="mb-4">
//                 <a href="#" className="hover:underline">Blog</a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Company</h2>
//             <ul className="text-gray-500 font-medium">
//               <li className="mb-4">
//                 <a href="/about" className="hover:underline">About</a>
//               </li>
//               <li className="mb-4">
//                 <a href="/contact" className="hover:underline">Contact</a>
//               </li>
//               <li className="mb-4">
//                 <a href="#" className="hover:underline">Brand Center</a>
//               </li>
//               <li className="mb-4">
//                 <a href="#" className="hover:underline">Blog</a>
//               </li>
//             </ul>
//           </div>
//           {/* Repeat similar structures for other sections */}
//         </div>
//         <div className=" flex justify-center px-4 py-6 bg-gray md:flex md:items-center md:justify-betwwen">
//           <span className="text-sm text-gray-500sm:text-center">© 2023 <a href="/">Indian kitchen Mart™</a>. All Rights Reserved.</span>
//           <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
//             {/* Social media icons */}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// // 