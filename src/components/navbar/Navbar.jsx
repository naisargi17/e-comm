"use client";
import { Dropdown, Navbar } from "flowbite-react";
import { useMediaQuery } from "react-responsive";
import { ChefHat } from "lucide-react";
import { ShoppingCart, User } from "lucide-react";
import { Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";
export default function NavbarC() {
  // const isLaptop = useMediaQuery({ minWidth: 1024 }); // Adjust the breakpoint as needed

  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };
  const handleCloseClick = () => {
    setVisible(false);
  };

  return (
    <div className="">
      {!visible && (
        <div>
          <Navbar fluid rounded className="bg-gray-100 ">
            <Navbar.Brand href="/">
              <ChefHat className="m-1" alt="logo" />
              <span className="self-center whitespace-nowrap text-xl font-semibold  md:text-lg lg:text-2xl">
                Indian Kitchen Mart
              </span>
            </Navbar.Brand>

            <div className="flex  md:order-2">
              <div className="flex mx-1 mt-2 md:m-2 md:mx-0">
                <Search onClick={handleClick} />
              </div>

              <div class="relative hidden md:block">
               
              </div>
              <Link href="/addtocart">
                <span className="flex flex-row m-2">
                  <ShoppingCart />
                </span>
              </Link>

              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <User />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">user name</span>
                  <span className="block truncate text-sm font-medium">
                    email123@gmail.com
                  </span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>SignOut</Dropdown.Item>
              </Dropdown>

              <Navbar.Toggle />
            </div>
            <Navbar.Collapse className="font-semibold text-base">
              <Navbar.Link
                href="/"
                className=" bg-gray-100 text-black hover:text-gray-300 text-lg md:text-sm lg:text-xl"
              >
                Home
              </Navbar.Link>

              <Navbar.Link
                className=" bg-gray-100 hover:bg-gray-300 text-lg md:text-sm lg:text-xl"
                href="/category"
              >
                Category
              </Navbar.Link>
              <Navbar.Link
                className=" bg-gray-100 hover:bg-gray-300 text-lg  md:text-sm lg:text-xl"
                href="/contact"
              >
                Contact
              </Navbar.Link>
              <Navbar.Link
                className="  bg-gray-100 hover:bg-gray-300 text-lg md:text-sm lg:text-xl"
                href="/about"
              >
                Our_Mission
              </Navbar.Link>
            </Navbar.Collapse>
          </Navbar>
        </div>
      )}
      <div className="">
        {visible && (
          <div className="">
            <div className="flex justify-end">
              {" "}
              <X onClick={handleCloseClick} />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="flex font-serif font-semibold text-3xl">
                {" "}
                what your looking for
              </h1>
              <p className="flex font-serif text-xl m-1 ">
                {" "}
                Enter the keyword ...
              </p>

              <input
                type="text"
                className="block w-screen text-xxl m-2 md:w-[90vw]  text-gray-900 border border-gray-100 rounded-lg bg-gray-50 focus:ring-slate-500 focus:border-slate-500"
                placeholder="Search..."
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
