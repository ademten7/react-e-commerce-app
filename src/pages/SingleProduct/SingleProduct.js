import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../api/products";
import ReactStars from "react-rating-stars-component";
import "./SingleProduct.css";

const SingleProduct = () => {
  const params = useParams();

  let productItem = products.find((item) => item.id == params.id);

  return (
    <div>
      {productItem && (
        <div className="single-page">
          <div className="image">
            <img src={productItem.image} width="400" height="400" alt="" />
          </div>
          <div>
            <h2 style={{ textAlign: "center" }} className="title">
              {productItem.title}
            </h2>
            <p style={{ textAlign: "center" }} className="description">
              {" "}
              {productItem.description}
            </p>
            <h2
              style={{ textAlign: "center" }}
              className={productItem.price > 100 ? "discount" : "normal"}
            >
              {" "}
              ${productItem.price}
            </h2>
            <div className="rate">
              <ReactStars
                count={5}
                size={36}
                activeColor="#ffd700"
                value={productItem.rating.rate}
                isHalf={true}
                edit={false}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
