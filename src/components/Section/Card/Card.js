import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

export default function Card({ product }) {
  return (
    <div className="Card" style={{ backgroundImage: `url(${product.image})` }}>
      <Link className="remove-underline" to={`/singleProduct/${product.id}`}>
        {product.title}
      </Link>
    </div>
  );
}
