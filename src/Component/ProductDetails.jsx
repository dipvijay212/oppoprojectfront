import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";
import { useCart } from "../contextApi/CartContext";
import { toast } from "react-toastify";
import OppoFooter from "./OppoFooter";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);
  const { cartItems, addToCart } = useCart();

  useEffect(() => {
    axios
      .get(`https://oppoproject4.onrender.com/api/product/${id}`)
      .then((res) => {
        const prod = res.data;
        setProduct(prod);
        const defaultStorage = prod.storageOptions?.[0];
        setSelectedStorage(defaultStorage?.type || "");
        setCurrentPrice(defaultStorage?.price || prod.price);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch product:", err);
        setError("Product not found");
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (product && selectedStorage) {
      const match = product.storageOptions.find((s) => s.type === selectedStorage);
      setCurrentPrice(match?.price || product.price);
    }
  }, [selectedStorage, product]);

  if (loading) return <h2 style={{ padding: "40px" }}>Loading...</h2>;
  if (error || !product) return <h2 style={{ padding: "40px" }}>Product not found.</h2>;

  const calculateEMI = (price, months = 12) => {
    const monthly = Math.round(price / months);
    return `₹${monthly.toLocaleString("en-IN")}/mo for ${months} months`;
  };

  const handleAddToCart = () => {
    const isAlreadyInCart = cartItems.some(
  (item) => item._id === product._id && item.storage === selectedStorage
);


    if (isAlreadyInCart) {
      toast.warn("This product with selected storage is already in your cart.");
      return;
    }

    addToCart({
      id: product._id,
      name: product.name,
      image: product.image,
      storage: selectedStorage,
      color: product.color?.[0] || "",
      price: currentPrice
    });

    toast.success("Product added to cart!");

    // Navigate after short delay
    setTimeout(() => {
      navigate("/cart");
    }, 1500);
  };

  return (
   <>
    <div className="product-container">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info-scrollable">
        <h1>{product.name}</h1>
        <p className="product-category">{product.category}</p>
        <p className="product-price">₹{currentPrice.toLocaleString("en-IN")}</p>
        <p className="emi-text">{calculateEMI(currentPrice)}</p>

        <div className="product-section">
          <label><strong>Choose Storage:</strong></label>
          <select
            value={selectedStorage}
            onChange={(e) => setSelectedStorage(e.target.value)}
            className="storage-select"
          >
            {(product.storageOptions || []).map((opt, idx) => (
              <option key={idx} value={opt.type}>
                {opt.type}
              </option>
            ))}
          </select>
        </div>

        <p className="product-desc">{product.description}</p>

        <div className="product-section">
          <h3>Key Features</h3>
          <ul>
            {(product.features || []).map((f, i) => (
              <li key={i}>✔ {f}</li>
            ))}
          </ul>
        </div>

        <div className="product-section">
          <p><strong>Color:</strong> {(product.color || []).join(", ")}</p>
          <p>
            <strong>Status:</strong>{" "}
            {product.inStock ? (
              <span className="in-stock">In Stock</span>
            ) : (
              <span className="out-stock">Out of Stock</span>
            )}
          </p>
        </div>

        <div className="button-group">
          <button className="add-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    <OppoFooter/>
   </>
  );
};

export default ProductDetails;
