import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./TabletGrid.css";
import OppoFooter from "./OppoFooter";

const TabletGrid = () => {
  const [tablets, setTablets] = useState([]);

  useEffect(() => {
    axios
      .get("https://oppoproject4.onrender.com/api/product")
      .then((res) => {
        const filteredTablets = res.data.filter(
          (product) =>
            product.category?.toLowerCase() === "tablet" ||
            product.name?.toLowerCase().includes("pad")
        );
        setTablets(filteredTablets);
      })
      .catch((err) => {
        console.error("Error fetching tablets:", err);
      });
  }, []);

  const handleClick = (id) => {
    localStorage.setItem("productId", id);
  };

  return (
    <>
    <div id="tablets-section" className="tablet-section">
      <h2>Tablets</h2>
      <div className="tablet-grid">
        {tablets.map((tablet) => (
          <div className="tablet-card" key={tablet._id}>
            <Link
              to={`/product/${tablet._id}`}
              onClick={() => handleClick(tablet._id)}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img src={tablet.image} alt={tablet.name} className="tablet-img" />
              <h3>{tablet.name}</h3>
              <p>{tablet.description}</p>
              <span className="learn-more">Learn more</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
     <div id="footer">
        <OppoFooter/>
      </div>
    </>
  );
};

export default TabletGrid;
