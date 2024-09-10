import React from "react";
import axios from "./axios";
import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
export const ProductContext = createContext();
const context = (props) => {
  const [products, setProducts] = useState([])

  const getproducts = async () => {
    try {
      const { data } = await axios("/products");
      setProducts(JSON.parse(localStorage.getItem("products"))||data);
      // localStorage.setItem('products', JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(products);
  useEffect(() => {
    getproducts();
  }, []);
  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default context;
