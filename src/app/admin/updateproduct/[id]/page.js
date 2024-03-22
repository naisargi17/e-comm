'use client'
import React, { Fragment, useEffect, useState } from "react";
import { TbFileDescription } from "react-icons/tb";
import { MdStorage, MdOutlineSpellcheck, MdOutlineAttachMoney, MdAccountTree } from "react-icons/md";
import axios from "axios";
import { toast } from 'react-toastify';
import { toastDisplayData } from "@/app/admin/createproduct/page";
import Spinner from "@/components/Spinner";

const UpdateProduct = ({ params }) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState('');

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get(`/api/admin/product/${params.id}`);
                const product = response.data.product;
                setName(product.name);
                setDescription(product.description);
                setPrice(product.price);
                setCategory(product.category);
                setStock(product.stock);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
        fetchProducts();

    }, []);


    const categories = [
        "Laptop",
        "Footwear",
        "Bottom",
        "Tops",
        "Attire",
        "Camera",
        "SmartPhones",
    ];

    const updateProductSubmitHandler = async (e) => {
        e.preventDefault();

        const data = {
            name,
            price: parseFloat(price),
            description,
            category,
            stock: parseFloat(stock),
        };

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            setLoading(true);
            const response = await axios.put(`/api/admin/products/updateproducts/${params.id}`, data, config);
            toast.success(response.data.message, toastDisplayData);
        } catch (error) {
            toast.error(error.message, toastDisplayData);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (

                <div className="flex flex-col items-center justify-center min-h-screen" >
                    <div className="border-2 border-black rounded-lg p-8" >
                        <h1 className="py-4 text-[2vw]">{loading ? "Processing" : "Update Product"}</h1>
                        <form encType="multipart/form-data" onSubmit={updateProductSubmitHandler}>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <MdOutlineSpellcheck />
                                    <label htmlFor="productName" className="ml-2">Product Name</label>
                                </div>
                                <input
                                    className="p-2 mt-2 w-[25vw] border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                                    type="text"
                                    placeholder="Product Name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <MdOutlineAttachMoney />
                                    <label htmlFor="productName" className="ml-1">Price</label>
                                </div>

                                <input
                                    className="p-2 mt-2 w-[25vw] border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                                    type="number"
                                    value={price}
                                    placeholder="Price"
                                    required
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>

                            <div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <TbFileDescription />
                                    <label htmlFor="productName" className="ml-2">Description</label>
                                </div>
                                <textarea
                                    className="p-2 mt-2 w-[25vw] border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                                    placeholder="Product Description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    cols="30"
                                    rows="1"
                                ></textarea>
                            </div>

                            <div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <MdAccountTree />
                                    <label htmlFor="productName" className="ml-2">Category</label>
                                </div>
                                <select
                                    value={category}
                                    className="p-2 mt-2 w-[25vw] border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value="">Choose Category</option>
                                    {categories.map((cate) => (
                                        <option key={cate} value={cate}>
                                            {cate}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <MdStorage />
                                    <label htmlFor="productName" className="ml-2">Stock </label>
                                </div>

                                <input
                                    className="p-2 mt-2 w-[25vw] border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                                    type="number"
                                    value={stock}
                                    placeholder="Stock"
                                    required
                                    onChange={(e) => setStock(e.target.value)}
                                />
                            </div>

                            <button
                                className="p-2 w-[25vw] bg-amber-400 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                                id="createProductBtn"
                                type="submit"
                                disabled={loading ? true : false}
                            >
                                Update
                            </button>
                        </form>

                    </div>
                </div>

            )
            }
        </>
    );
};

export default UpdateProduct;