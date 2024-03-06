'use client'
import { Accordion, Card } from "flowbite-react";
const productData = [
    {
      title: "Powerful motor",
      description:
        " Equipped with a robust and high-performance 110-volt motor,the Preethi Eco Plus Mixer Grinder efficiently handles a variety of tasks, from grinding to blending.",
    },
    {
      title: "Verstile Functions",
      description:
        "This mixer grinder offers multiple functions, including grinding, blending, and juicing, making it a versatile appliance for your kitchen.",
    },
    {
      title: "Stainless steel jar",
      description:
        "The set includes stainless steel jars of different sizes, each designed for specific tasks such as dry grinding, wet grinding, and blending.",
    },
    {
      title: "Durable Blades",
      description:
        "The mixer grinder comes with razor-sharp stainless steel blades that ensure efficient and consistent grinding of ingredients.",
    },
    {
      title: "3-speed Control",
      description:
        "The 3-speed control knob allows you to customize the grinding or blending process according to the texture you desire.",
    },
  ];
  // ...

const ProductCard = () => {
    return (
      <div className="flex flex-col md:w-[80vw] md:h-auto  sm:w-full sm:auto w-[60vw] h-[35vw]">
        <div className="flex flex-row justify-between item-center mt-10">
        <div className='flex flex-col text-balance w-full '>
          <p className="flex text-wrap md:h-auto sm:h-auto">
            Upgrade your culinary experience with the Preethi Eco Plus Mixer
            Grinder, a powerful and versatile kitchen appliance designed to handle
            various culinary tasks. With its 550-watt motor, stainless steel
            jars, and shock-proof design, this mixer grinder is a reliable
            companion for your kitchen adventures.
          </p>
          <div className="m-2">
            <ul>
            <li>
                 <b>Brand:</b>Preethi
               </li>
               <li>
                 <b>Wattage: </b>550 Watts
               </li>
               <li>
                 <b>Voltage: </b>USA 110 Volts
               </li>
               <li>
                 <b>Jar Configuration: </b>The Mixer comes with 1.5L Big Jar, 1.0
                 L Medium and 0.4L Chutney Jar. All jars are designed for wet and
                 dry grinding both.
               </li>
               <li>
                 <b>Material:</b> Body is made up of high quality ABS
                 Polycarbonate and Jars comes with stainless steel build.
               </li>
               <li>
                 <b>Design:</b> Shock-proof for motor safety
               </li>
            </ul>
          </div>
          <p className="m-2">
            Upgrade your kitchen with the Preethi Eco Plus Mixer Grinder. Order
            now from East West USA Store and experience the perfect blend of
            style and efficiency in your culinary endeavors.
          </p>
        </div>
        <div className=" flex-col lg:overflow-auto md:h-[40vw]  md:w-[53vw] sm:overflow-auto md:overflow-auto lg:h-[29vw] w-[40vw] ">
          {productData &&
            productData.map((item) => (
              <div className="flex flex-col" key={item.title}>
                <Accordion>
                  <Accordion.Panel>
                    <Accordion.Title>
                      <div className="w-[15vw] ">{item.title}</div>
                    </Accordion.Title>
                    <Accordion.Content>
                      <div className="">
                        <p className="mb-2 w-[15vw] h-[8vw] md:h-[12vw] md:w-[25vw] text-gray-500 ">
                          {item.description}
                        </p>
                      </div>
                    </Accordion.Content>
                  </Accordion.Panel>
                </Accordion>
              </div>
            ))}
        </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  
  
// const ProductCard = () => {
//     return (
//         <div className="flex justify-center items-center min-h-full ">
//         <div className='flex flex-col  text-balance   justify-center items-center  w-full mx-auto  "'>
//           <p className=" ">
//             Upgrade your culinary experience with the Preethi Eco Plus Mixer
//             Grinder, a powerful and versatile kitchen appliance designed to
//             handle various culinary tasks. With its 550-watt motor, stainless
//             steel jars, and shock-proof design, this mixer grinder is a reliable
//             companion for your kitchen adventures.
//           </p>
//           <div className="m-2">
//             <ul>
//               <li>
//                 <b>Brand:</b>Preethi
//               </li>
//               <li>
//                 <b>Wattage: </b>550 Watts
//               </li>
//               <li>
//                 <b>Voltage: </b>USA 110 Volts
//               </li>
//               <li>
//                 <b>Jar Configuration: </b>The Mixer comes with 1.5L Big Jar, 1.0
//                 L Medium and 0.4L Chutney Jar. All jars are designed for wet and
//                 dry grinding both.
//               </li>
//               <li>
//                 <b>Material:</b> Body is made up of high quality ABS
//                 Polycarbonate and Jars comes with stainless steel build.
//               </li>
//               <li>
//                 <b>Design:</b> Shock-proof for motor safety
//               </li>
//             </ul>
//           </div>
//           <p className="m-2">
//             Upgrade your kitchen with the Preethi Eco Plus Mixer Grinder. Order
//             now from East West USA Store and experience the perfect blend of
//             style and efficiency in your culinary endeavors.
//           </p>
//         </div>
//         <div className="flex flex-col overflow-auto mt-6 ml-3 w-[25vw] h-[40vw] ">
//           {productData &&
//             productData.map((item) => (
//               <div className="flex flex-col">
//                 <Accordion>
//                   <Accordion.Panel>
//                     <Accordion.Title>
//                       <div className="w-[15vw] ">{item.title}</div>
//                     </Accordion.Title>
//                     <Accordion.Content>
//                       <div className="">
//                         <p className="mb-2 w-[15vw] h-[8vw] text-gray-500 ">
//                           {item.description}
//                         </p>
//                       </div>
//                     </Accordion.Content>
//                   </Accordion.Panel>
//                 </Accordion>
//               </div>
//             ))}
//         </div>
//       </div>
//     )    
// }
 
// export default ProductCard;
