import Links from "./links/Links";
import Link from "next/link";
const Navbar = () => {
    return ( <div className=" flex flex-row w-full md:w-1/ p-4 bg-[#ccfbf1] container mx-auto ">
       <div className="flex flex-wrap w-full "> Logo</div>
       <div ><Links/></div>
    </div> );
}
 
export default Navbar;