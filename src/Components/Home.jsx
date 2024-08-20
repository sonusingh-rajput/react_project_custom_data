import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { useContext, useEffect, useState } from "react";
import { productContex } from "../utils/Context";
import Loder from "./Loder";
import axios from "../utils/Axios";

const Home = () => {
  const [products] = useContext(productContex);
  const [filteredProducts,setFilteredProducts] = useState(null);

  // Category wise view 
  const {search} = useLocation();
  const category = decodeURIComponent (search.split("=")[1]);

  const getProductsCategory = async () => {
    try{
      const {data} = await axios.get(`/products/category/${category}`);
      setFilteredProducts(data);
    }catch(err){
      console.log(err)
    }
  }
  
  useEffect(() => {
    if(!filteredProducts || category == "undefined") setFilteredProducts(products)
      if(category != "undefined") getProductsCategory()
  },[category,products])

  return products ? (
    <>
      <Nav />
      <div className="w-full flex flex-wrap p-16 overflow-x-hidden overflow-y-auto  ">
        {filteredProducts && filteredProducts.map((p, i) => (
          <Link key={i}
            to={`/details/${p.id}`}
            className="border-sky-200 border mr-3 mb-3 w-[15vw] h-[30vh] shadow hover:scale-105 transition-all cursor-pointer p-2"
          >
            <div
              style={{
                backgroundImage:
                  `url(${p.image})`,
              }}
              className="w-full h-[65%] bg-contain bg-no-repeat bg-center p-2"
            ></div>
            <p className="mt-3 font-semibold text-center hover:text-blue-400 text-sm overflow-hidden">
              {p.title}
            </p>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loder />
  );
};

export default Home;
