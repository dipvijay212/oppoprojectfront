import React from "react";
import "./FindNSeries.css";

export default function FindXSeries() {
  return (
    <div className="findn-container">
      <h2 className="title">OPPO Find X Series</h2>
      <div className="findn-row">
        {/* Large Image on the Left */}
        <div className="findn-left">
          <img
            src="https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/find-x8-series-en/find-x8-pro/listpage/1304-732-2.png"
            alt="OPPO Find N5"
            className="main-img"
          />
          <div className="caption">
            <h3>OPPO Find X8 Series</h3>
            <p>Powerful Camera, Powerful AI</p>
          </div>
        </div>

        {/* Two Smaller Images Side-by-Side on Right */}
        <div className="findn-right">
          <div className="secondary-img-block">
            <img
              src="https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/find-x8-series-en/find-x8-pro/listpage/644-732-5.jpeg"
              alt="Redefining Slim"
              className="secondary-img"
            />
            <div className="overlay">Lightning Snap</div>
          </div>
          <div className="secondary-img-block">
            <img
              src="https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/find-x8-series-en/find-x8-pro/listpage/644-732-6.jpeg"
              alt="PC-Level Productivity"
              className="secondary-img"
            />
            <div className="overlay">AI Telescope Zoom</div>
          </div>
        </div>
      </div>

      <button className="learn-more-btn">Learn more</button>
    </div>
  );
}
