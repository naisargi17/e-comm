"use client"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "@/redux/silces/productSlice";
import { useRouter } from "next/navigation";


const Update =({params}) => {  
    const router = useRouter();
    const dispatch = useDispatch();
    const [updateData, setUpdateData] = useState();

  const { products, loading } = useSelector((state) => state.app);
  useEffect(() => {
    if (params.id) {
      const singleProduct = products.filter((ele) => ele.id === id);
      setUpdateData(singleProduct[0]);
    }
  }, []);
  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateProduct(updateData));
    router.push(`/all`);
  };
  const categories = [
    "Laptop",
    "Footwear",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
    "SmartPhones",
];
  console.log("updated data", updateData);

    return ( <div>
        <div className="flex flex-col items-center justify-center min-h-screen" >
            <div className="border-2 border-black rounded-lg p-8" >
                <h1 className="py-4 text-[2vw]"> Update Product</h1>

                <form onSubmit={handleUpdate}>
                    <label htmlFor="username">Product name</label><br />
                    <input
                        className="p-2 mt-2 w-[25vw] border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                        id="productName"
                        type="text"
                        value={updateData && updateData.name}
                        onChange={newData}
                        placeholder="Product name"
                    /><br />
                    <label htmlFor="description">Description</label><br />
                    <input
                        className="p-2 w-[25vw] mt-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                        id="description"
                        type="text"
                        value={updateData && updateData.description}
                        onChange={newData}
                        placeholder="Description"
                    /><br />
                    <label htmlFor="price">Price</label><br />
                    <input
                        className="p-2 w-[25vw] mt-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                        id="mobileNo"
                        type="Number"
                        value={updateData && updateData.price}
                        onChange={newData}
                        placeholder="Price"
                    /><br />
                    <label htmlFor="category">Category</label><br />
                    <select className="p-2 w-[25vw] mt-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"value={updateData && updateData.category}
                        onChange={newData}>
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
                        value={updateData && updateData.quantity}
                        onChange={newData}
                        placeholder="Stock"
                    /><br />
                    <button
                        type="submit"
                        className="p-2 w-[25vw] bg-amber-400 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Update</button>
                </form>
            </div>
        </div>
       
        
    </div>);
}
 
export default Update;

// {params.id}