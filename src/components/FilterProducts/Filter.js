import React, { useContext, useRef, useState } from "react";
import { MyContext } from "../../Context/context";
import "./Filter.css";
import { FaFilter } from "react-icons/fa";

const Filter = () => {
  const formRef = useRef();
  const { products, setProducts, data } = useContext(MyContext);
  const [category, setCategory] = useState("all");
  const [star, setStar] = useState(0);
  const [price, setPrice] = useState(0);
  const [defaultPrice, setDefaultPrice] = useState({ d: 500 });

  const getDataFromForm = (e) => {
    e.preventDefault();
    console.log(formRef.currrent);
    setCategory(formRef.current.category.value);
    setStar(formRef.current.star.value);
    setPrice(formRef.current.price.value);

    console.log(category);
    console.log(star);
    console.log(price);
    console.log(defaultPrice);

    if (category !== "all") {
      let tempProducts = data.filter(
        (product) =>
          product.category === category &&
          product.rating.rate >= star &&
          product.price <= price
      );
      setProducts(tempProducts);
    }
  };

  // const getRangeValue = (e) => {
  //   let value = e.target.price.value;
  //   setDefaultPrice(value);
  // };

  return (
    <div className="filter">
      <h1>Filtered Items</h1>
      <form onSubmit={getDataFromForm} ref={formRef} className="filter-form">
        {/* select the category */}
        <div className="form-group">
          <label className="category" htmlFor="type">
            Category
          </label>
          <select name="category" id="type" className="form-control">
            <option value="all">all</option>
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothing</option>
            <option value="kid's clothing">kid's clothing</option>
          </select>
        </div>
        {/* select stars */}
        <div className="form-group">
          <label className="star" htmlFor="star">
            Star
          </label>
          <select name="star" id="star" className="form-control">
            <option selected value="1" selected>
              1
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        {/* product price */}
        <div className="form-group">
          {/* <label htmlFor="price">Room Price ${price}</label> */}
          <label className="price" htmlFor="price">
            Price : ${defaultPrice.d}
          </label>
          <input
            onChange={(e) =>
              setDefaultPrice({ ...defaultPrice, d: e.target.value })
            }
            type="range"
            name="price"
            id="price"
            min="5"
            max="1000"
            // defaultValue={defaultPrice}
            class="slider"
          />
        </div>

        <div>
          <button className="btn-prima btn" type="submit">
            <FaFilter /> Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
