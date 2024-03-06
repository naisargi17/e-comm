"use client"
import {
  Navbar,  
} from 'flowbite-react';

export default function Navbars(){
    return(
        <Navbar fluid rounded className='bg-gray-100'>
            <Navbar.Link href="/create">Create</Navbar.Link>
            <Navbar.Link href="/all">Product</Navbar.Link>
            <Navbar.Link href="/edit">Update</Navbar.Link>

        </Navbar>
    )
}