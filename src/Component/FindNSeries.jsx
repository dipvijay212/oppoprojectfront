import React from "react";
import "./FindNSeries.css";

export default function FindNSeries() {
  return (
    <div className="findn-container">
      <h2 className="title">OPPO Find N Series</h2>
      <div className="findn-row">
        {/* Large Image on the Left */}
        <div className="findn-left">
          <img
            src="https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/oppo-find-n5-en/listpage/1304-732-v2.jpg"
            alt="OPPO Find N5"
            className="main-img"
          />
          <div className="caption">
            <h3>OPPO Find N5</h3>
            <p>Slim, Yet Powerful</p>
          </div>
        </div>

        {/* Two Smaller Images Side-by-Side on Right */}
        <div className="findn-right">
          <div className="secondary-img-block">
            <img
              src="https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/oppo-find-n5-en/listpage/644-732-4.jpg"
              alt="Redefining Slim"
              className="secondary-img"
            />
            <div className="overlay">Redefining Slim</div>
          </div>
          <div className="secondary-img-block">
            <img
              src="https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/oppo-find-n5-en/listpage/644-732-2.jpg"
              alt="PC-Level Productivity"
              className="secondary-img"
            />
            <div className="overlay">PC-Level Productivity</div>
          </div>
        </div>
      </div>

      <button className="learn-more-btn">Learn more</button>
    </div>
  );
}
