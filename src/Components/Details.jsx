import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from "../utils/Axios";
import { useParams } from "react-router-dom";
import Loder from "./Loder";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const { title, description, image, price, category } = product;
  const getProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setProduct(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return product ?  
    <div className="flex gap-10 justify-center items-center h-full w-full">
      {image ? <img className="w-[25%]  object-fit" src={`${image}`} /> : <Loder />}
      {title ? <div className="w-[30%]">
        <h1 className="text-2xl font-semibold mb-3 text-zinc-800">{title}</h1>
        <div className="flex items-center gap-3 mb-3">
          <div className="inline-block">
          {product.rating && (
            <p className="flex items-center gap-2 px-3 py-1 bg-gray-800 text-white rounded font-bold">
              {product.rating.rate}{" "}
              <span className="text-sm">
                <FaStar />
              </span>{" "}
            </p>
          )}
          </div>
         {product.rating && (
          <div className="flex gap-1 items-center text-zinc-500">
          <p className="font-semibold">{product.rating.count}</p>
            <p className="tracking-wide">Ratings</p>
          </div>
         )}
        </div>
        <p className="mb-3 text-zinc-400 text-sm">{category}</p>
        <p className="text-2xl font-semibold mb-3">${price}</p>
        <p className="text-sm text-zinc-700 mb-6 ">{description}</p>
        <div className="flex gap-5">
          <button className="px-8 py-1 text-green-800 hover:text-green-500 rounded  border border-green-800">
            Edit
          </button>
          <button className="px-6 py-1 text-green-800 hover:text-red-400 rounded border border-green-800">
            Delete
          </button>
        </div>
      </div> : <Loder />}
    </div> 
   : 
  <Loder />
};

export default Details;
