import React from "react";
import "./FindNSeries.css";

export default function OppoASeries() {
  return (
    <div className="findn-container">
      <h2 className="title">OPPO A Series</h2>
      <div className="findn-row">
        {/* Large Image on the Left */}
        <div className="findn-left">
          <img
            src="https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/a5-series-en/v3/listpage/1304-732.jpg"
            alt="OPPO A5 5G"
            className="main-img"
          />
          <div className="caption">
            <h3>OPPO A5 5G</h3>
            <p>IP65 Water and Dust Resistance, Military-Grade Shock Resistance</p>
          </div>
        </div>

        {/* Two Smaller Images Side-by-Side on Right */}
        <div className="findn-right">
          <div className="secondary-img-block">
            <img
              src="https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/a5-series-en/v3/listpage/644-732-green-2-v2.jpg"
              alt="Redefining Slim"
              className="secondary-img"
            />
            <div className="overlay">IP65 Water and Dust Resistance</div>
          </div>
          <div className="secondary-img-block">
            <img
              src="https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/a5-series-en/v3/listpage/644-732-white-v2.jpg"
              alt="PC-Level Productivity"
              className="secondary-img"
            />
            <div className="overlay">Military-Grade Shock Resistance</div>
          </div>
        </div>
      </div>

      <button className="learn-more-btn">Learn more</button>
    </div>
  );
}
