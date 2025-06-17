import React from "react";
import "./OffersSection.css";

const offers = [
  {
    id: 1,
    title: "Exchange Program",
    subtitle: "Extra Exchange Bonus up to ₹2,500",
    buttonText: "Exchange now",
    image: "/images/exchange.png", // Replace with your local path
    bgColor: "#f6f0fc",
  },
  {
    id: 2,
    title: "Student Offers",
    subtitle: "Get Exclusive Offers for Students on OPPO Store",
    buttonText: "Verify now",
    image: "/images/student.png",
    bgColor: "#e8f2fd",
  },
  {
    id: 3,
    title: "Welcome Gift",
    subtitle: "Get Coupons Worth ₹7,050 for New Members",
    buttonText: "Grab now",
    image: "/images/gift.png",
    bgColor: "#f3f7f3",
  },
];

export default function OffersSection() {
  return (
    <div className="offers-wrapper">
    <div className="offers-section">
        <div className="offer-image">
            <img src="https://opsg-img-cdn-gl.heytapimg.com/epb/202505/08/kf0ofDTXZbw2sPZn.jpg?x-amz-process=image/format,webp/quality,Q_80" alt="" />
          </div>
           <div className="offer-image">
            <img src="https://opsg-img-cdn-gl.heytapimg.com/epb/202505/29/QpyIkdLk08SZ8Pwv.jpg?x-amz-process=image/format,webp/quality,Q_80" alt="" />
          </div>
           <div className="offer-image">
            <img src="https://opsg-img-cdn-gl.heytapimg.com/epb/202505/26/EMBEGCFyp5bAneNk.jpg?x-amz-process=image/format,webp/quality,Q_80" alt="" />
          </div>
    
    </div>
    </div>
  );
}
