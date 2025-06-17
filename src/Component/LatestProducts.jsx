import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LatestProducts.css";
import FindNSeries from "./FindNSeries";
import FindNSeriesGrid from "./FindNSeriesGrid";
import FindXSeries from "./FindXSeries";
import FindXSeriesGrid from "./FindXSeriesGrid";
import OppoRenoSeries from "./OppoRenoSeries";
import OppoRenoSeriesGrid from "./OppoRenoSeriesGrid";
import OppoASeries from "./OppoASeries";
import OppoASeriesGrid from "./OppoASeriesGrid";
import ProductFilter from "./ProductFilter";
import OppoFooter from "./OppoFooter";

const LatestProducts = () => {
  const [products, setProducts] = useState([]);

  const tabs = [
    { name: "Latest Products", path: "#latest-products" },
    { name: "Find N Series", path: "#find-n-series" },
    { name: "Find X Series", path: "#find-x-series" },
    { name: "Reno Series", path: "#reno-series" },
    { name: "A Series", path: "#a-series" },
    { name: "Filters", path: "#filters" },
    { name: "Compare", path: "#compare" },
  ];

  useEffect(() => {
    axios
      .get("https://oppoproject4.onrender.com/api/product")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  const highEndPhones = products.filter(
    (product) =>
      product.category === "Smartphone" && Number(product.price) > 50000
  );

  const handleProductClick = (id) => {
    localStorage.setItem("productId", id);
  };

  return (
    <>
      <nav className="nav-tabs">
        {tabs.map((tab, index) => (
          <a key={index} href={tab.path} className="tab-link">
            {tab.name}
          </a>
        ))}
      </nav>

      <div id="latest-products" className="latest-products">
        <h2>Latest Products</h2>
        <div className="product-grid">
          {highEndPhones.map((phone) => (
            <a
              href={`/product/${phone._id}`}
              key={phone._id}
              onClick={() => handleProductClick(phone._id)}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="product-card">
                <img
                  src={phone.image}
                  alt={phone.name}
                  className="product-img"
                />
                <h3>{phone.name}</h3>
                <p className="product-description">
                  {phone.description.length > 90
                    ? phone.description.slice(0, 90) + "..."
                    : phone.description}
                </p>
                <span className="learn-more">Learn more</span>
                <div className="color-options">
                  {phone.color.map((clr, idx) => (
                    <span
                      key={idx}
                      className="color-dot"
                      style={{ backgroundColor: clr.toLowerCase() }}
                    ></span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div id="find-n-series">
        <FindNSeries />
        <FindNSeriesGrid />
      </div>

      <div id="find-x-series">
        <FindXSeries />
        <FindXSeriesGrid />
      </div>

      <div id="reno-series">
        <OppoRenoSeries />
        <OppoRenoSeriesGrid />
      </div>

      <div id="a-series">
        <OppoASeries />
        <OppoASeriesGrid />
      </div>

      <div id="filters">
       <ProductFilter/>
      </div>

      <div id="footer">
        <OppoFooter/>
      </div>

    </>
  );
};

export default LatestProducts;
