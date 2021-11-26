import React, { useEffect, useState } from "react";
import { MyContext } from "./context";
import data from "../api/products";



const Container = (props) => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [bag, setBag] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  

  useEffect(() => {
    setProducts(data);
  }, []);
  console.log(products);
  return (
    <MyContext.Provider
      value={{
        user,
        setUser,
        products,
        setProducts,
        bag,
        setBag,
        quantity,
        setQuantity,
        totalPrice,

        setTotalPrice,
        data,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default Container;
