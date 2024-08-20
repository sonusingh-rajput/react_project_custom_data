import React, { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const addProductHandler = (e) => {
    e.preventDefault();
    const formData = {
      title,
      image,
      category,
      price,
      description,
    }
    console.log(formData)
  }

  return (
    <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
      <form onSubmit={addProductHandler} className="w-[50%] ">
        <h1 className="text-2xl mb-5">Add New Product</h1>
        <input
          type="url"
          placeholder="Image link"
          className=" mb-3 w-full px-3 py-2 bg-slate-100 border-slate-300 rounded shadow-sm placeholder-slate-400
                      focus:outline-none  
                     disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                     focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
        <input
          type="text"
          placeholder="Title"
          className="focus:outline-none mb-3 bg-slate-100 text-zinc-800 w-full p-2 border rounded "
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          placeholder="Category"
          className="focus:outline-none w-[50%] mb-3 bg-slate-100 text-zinc-800 p-2 border rounded "
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="Price"
          className="focus:outline-none w-[48%] mb-3 ml-3 bg-slate-100 text-zinc-800 p-2 border rounded "
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <textarea
          type="textarea"
          rows={10}
          placeholder="Enter Product description here..."
          className="focus:outline-none w-full mb-3  bg-slate-100 text-zinc-800 p-2 border rounded "
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button className="text-blue-400 hover:text-blue-500  px-5 py-2 border rounded ">
          Add New Product
        </button>
      </form>
    </div>
  );
};

export default Create;
