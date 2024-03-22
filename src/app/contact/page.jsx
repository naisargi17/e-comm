import Cards from "@/components/card/Card";
import NavbarC from "@/components/navbar/Navbar";
export const metadata ={
  title:"Contact Us"
  
}
const Contactpage = () => {
  return (
    <div className=" ">
      <div>
        <NavbarC/>
      </div>
      <h1 className="px-56 py-10">Get in touch with us today to learn more about our range of products or any assistance. Our team of experts is here to help you with all your needs.  If you have any quarries relates to Indian Mixers, Indian Wet Grinder, repairing your appliance, or any other related things, Just Fill out the form below to get started and we will get back to you as soon possible.</h1>
      <h2 className=" flex justify-center items-center text-2xl">+6198561545312</h2>
      <form className="max-w-md mx-auto mt-8 border-spacing-0 px-6 py-5 border rounded border-gray-800" >
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Your Name"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Your Email"
          required
        />
        <label htmlFor="description" className=" block text-gray-700 text-sm font-bold mb-2">Description</label>
        <input
          type="text"
          id="desc"
          name="description"
          placeholder="Message Description"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className=" flex justify-center bg-slate-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition duration-300"
      >
        Submit
      </button>
    </form>
      <h1 className=" flex justify-center items-center text-5xl pt-8"> New Arrivals</h1>
      <div className="flex flex-row flex-wrap  justify-center items-center px-16 py-4 space-x-7">
      <Cards/>
      </div>
      <div>
        <NavbarC/>
      </div>
    </div>
    
  );
};

export default Contactpage;
