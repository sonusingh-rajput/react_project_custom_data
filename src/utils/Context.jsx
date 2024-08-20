import axios from "./Axios";
import { createContext, useEffect, useState } from "react";

export const productContex = createContext();

const Context = (props) => {
  const [porduct, setProduct] = useState(null);

  const getProducts = async () =>{
    try{
      const {data} = await axios("/products")
      setProduct(data)
    }catch(error) {
      console.log(error)
    }
  }
useEffect(() =>{
  getProducts()
} ,[])
  return (
    <productContex.Provider value={[porduct, setProduct]}>
      {props.children}
    </productContex.Provider>
  );
};

export default Context;
