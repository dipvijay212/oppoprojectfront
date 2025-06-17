import React, { useEffect, useState } from "react";
import axios from "axios";
import "./OppoRenoSeries.css";

const OppoRenoSeries = () => {

  return (
    <div className="reno-series-container">
      <h2 className="series-title">OPPO Reno Series</h2>
      <div className="reno-products">
        <div className="reno-card" >
            <img src="https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/reno13-series/list-page/reno13-pro-5g/1304-732-3.png" alt="OPPO Reno13 Pro 5G" className="reno-img" />
            <div className="reno-info">
              <h3>OPPO Reno13 Pro 5G</h3>
              <p>Urban Avant-Garde Aesthetic, AI Livephoto, AI Editor</p>
              <a href="" className="learn-more">
                Learn more
              </a>
            </div>
          </div>
            <div className="reno-card" >
            <img src="https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/reno13-series/list-page/reno13-5g/1304-732-3.png" alt="OPPO Reno13 5G" className="reno-img" />
            <div className="reno-info">
              <h3>OPPO Reno13 5G</h3>
              <p>IP69 Water and Dust Resistance, 5600mAh Large Battery, AI LinkBoost 2.0</p>
              <a href="" className="learn-more">
                Learn more
              </a>
            </div>
          </div>
        {/* {products.map((product) => (
          <div className="reno-card" key={product._id}>
            <img src={product.image} alt={product.name} className="reno-img" />
            <div className="reno-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <a href={`/product/${product._id}`} className="learn-more">
                Learn more
              </a>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default OppoRenoSeries;
