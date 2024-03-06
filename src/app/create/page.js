"use client"
import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux"
import { useRouter } from "next/navigation";
import {createProduct} from '@/redux/silces/productSlice'

const create = () => {
    const router = useRouter();
    const dispatch = useDispatch()
    
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        quantity: "",
    })
    const categories = [
        "Laptop",
        "Footwear",
        "Bottom",
        "Tops",
        "Attire",
        "Camera",
        "SmartPhones",
    ];
    
    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log(product);
        dispatch(createProduct(product));
        router.push(`/productdisplay`)

    }
    return ( 
        <div className="flex flex-col items-center justify-center min-h-screen" >
            <div className="border-2 border-black rounded-lg p-8" >
                <h1 className="py-4 text-[2vw]"> Create Product</h1>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Product name</label><br />
                    <input
                        className="p-2 mt-2 w-[25vw] border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                        id="productName"
                        type="text"
                        value={product.name}
                        onChange={(e) => setProduct({ ...product, name: e.target.value })}
                        placeholder="Product name"
                    /><br />
                    <label htmlFor="description">Description</label><br />
                    <input
                        className="p-2 w-[25vw] mt-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                        id="description"
                        type="text"
                        value={product.description}
                        onChange={(e) => setProduct({ ...product, description: e.target.value })}
                        placeholder="Description"
                    /><br />
                    <label htmlFor="price">Price</label><br />
                    <input
                        className="p-2 w-[25vw] mt-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                        id="mobileNo"
                        type="Number"
                        value={product.price}
                        onChange={(e) => setProduct({ ...product, price: e.target.value })}
                        placeholder="Price"
                    /><br />
                    <label htmlFor="category">Category</label><br />
                    <select className="p-2 w-[25vw] mt-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black" onChange={(e) => setProduct({ ...product, category: e.target.value })}>
                        <option value="">Choose Category</option>
                        {categories.map((cate) => (
                            <option key={cate} value={cate}>
                                {cate}
                            </option>
                        ))}
                    </select><br />
                    <label htmlFor="stock">Quantity</label><br />
                    <input
                        className="p-2 w-[25vw] mt-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                        id="stock"
                        type="Number"
                        value={product.quantity}
                        onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
                        placeholder="Stock"
                    /><br />
                    <button
                        type="submit"
                        className="p-2 w-[25vw] bg-amber-400 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Create</button>
                </form>
            </div>
        </div>
     );
}
 
export default create;