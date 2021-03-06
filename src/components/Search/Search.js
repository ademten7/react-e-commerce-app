import React, { useContext, useRef } from "react";
import { MyContext } from "../../Context/context";
import "./Search.scss";
import { Anchor } from "antd";
const { Link } = Anchor;

const Search = () => {
  const inputRef = useRef();
  const { setProducts, data } = useContext(MyContext);
  //useRef()
  const searchValue = (e) => {
    e.preventDefault();
    // console.log(inputRef.current.searchItem.value);

    let updatedProducts = data.filter(
      (product) =>
        product.category
          .toLowerCase()
          .includes(inputRef.current.searchItem.value.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(inputRef.current.searchItem.value.toLowerCase()) ||
        product.title
          .toLowerCase()
          .includes(inputRef.current.searchItem.value.toLowerCase())
    );
    setProducts(updatedProducts);
    inputRef.current.searchItem.value = "";
  };
  return (
    <div className="Search">
      <form className="Form-Search" onSubmit={searchValue} ref={inputRef}>
        <input
          // onChange={searchProduct}
          onFocus={() => setProducts(data)}
          className="search"
          type="text"
          name="searchItem"
          //name is important for useREf
          placeholder="Search products"
        />
        <Anchor affix={false}>
          <Link
            href="#home-page-products"
            title={
              <button type="submit" name="search">
                Search
              </button>
            }
          />
        </Anchor>
      </form>
    </div>
  );
};

export default Search;
