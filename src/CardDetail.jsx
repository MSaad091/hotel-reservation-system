import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "./Carddetail.css";
import { setAddCart } from "./features/inventry";

function CardDetail() {
  const { id } = useParams();
  const [selectedImg, setSelectedImg] = useState(null);
  const dispatch = useDispatch()
  const products = useSelector((state) => state.homes);
  const { rooms } = useSelector((state) => state.inventry);

  const allProducts = [...products, ...rooms];
  const product = allProducts.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="card-detail-container">
      {/* Thumbnail Images */}
      <div className="thumbnail-row">
        {product.images
          ? product.images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`${product.name}-${index}`}
                onClick={() => setSelectedImg(src)}
              />
            ))
          : product.img && (
              <img
                src={product.img}
                alt={product.name}
                onClick={() => setSelectedImg(product.img)}
              />
            )}
      </div>

      {/* Large Image Preview */}
      <div className="imgbody">
        {selectedImg ? (
          <img src={selectedImg} alt="Selected" />
        ) : (
          <p style={{ color: "#777" }}>Click an image to view</p>
        )}
      </div>

      {/* Product Details */}
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>Price: Rs{product.price}</p>
        <p>{product.info}</p>
        <Link to='/pay'><button onClick={() =>dispatch(setAddCart(product)) }>Add To Card</button></Link>
      </div>
    </div>
  );
}

export default CardDetail;
