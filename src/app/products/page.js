"use client";

import { useSelector, useDispatch } from "react-redux";
// import {
//   addProduct,
//   deleteProduct,
//   updateProduct,
// } from "@/redux/silces/productSlice";
import { useState } from "react";
import { createProduct } from "@/redux/silces/productSlice";
import React from "react";
export default function Products() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showform, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);
  const handleAddProduct = (e) => {
    e.preventDefault();

    if (!title && !description) return;

    const newProduct = {
      id: Date.now(),
      title,
      description,
    };

    dispatch(createProduct(newProduct));

    // Reset form fields
    setTitle("");
    setDescription("");
  };

  // const handleRemoveProduct = (productId) => {
  //   dispatch(deleteProduct(productId));
  // };
  const handleUpdateProduct = (productid) => {
    dispatch(updateProduct({ id: productid, updatedProduct: formData }));
  };

  const handleform = () => {
    setShowForm(true);
  };
  console.log(products);
  return (
    <div>
    
      <form>
        <input
          type="text"
          className=""
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          className=""
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className="" onClick={handleAddProduct}>
          Add New Product
        </button>
      </form>

      <h1 className="">Posts</h1>
      {/* {products ? (
        products.map((product) => (
          <div key={product.id} className="">
            <h3 className={product.title}>{product.title}</h3>
            <p className={product.description}>{product.description}</p>
            <button
              className=""
              onClick={() => handleRemoveProduct(product.id)}
            >
              Delete
            </button>
            <button onClick={() => handleform}>Update</button>
          </div>
        ))
      ) : (
        <p>No product found.</p>
      )} */}
      <div>
        {showform && (
          <form onSubmit={handleUpdateProduct}>
            <label>Title</label>
            <input type="text" />
            <label>Description</label>
            <input type="text" name="description"/>
            <button type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
