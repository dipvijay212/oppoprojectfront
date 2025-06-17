// HomeSlider.jsx
import React, { useState, useEffect } from "react";
import "./HomeSlider.css";

const slides = [
  {
    id: 1,
    title: "OPPO A5 Pro 5G",
    subtitle: "A Step Ahead",
    text:"IP69 All-Round Waterproof Champion",
    price: "₹17,999",
    oldPrice: "₹21,999",
    image: "https://opsg-img-cdn-gl.heytapimg.com/epb/202505/31/9cf9iXpdMv6pU8nk.jpg?x-amz-process=image/format,webp/quality,Q_80", // Change to your actual image path
  },
  {
    id: 2,
    title: "OPPO F29 Series 5G",
    subtitle: "₹2500 Exchange Extra Bonus ",
    text:"10% instant Discount up to ₹3,199 | 12 Months NCEMI",
    price: "₹23,999",
    oldPrice: "₹26,999",
    image: "https://opsg-img-cdn-gl.heytapimg.com/epb/202505/28/em65CvbXXdgWeNUG.png?x-amz-process=image/format,webp/quality,Q_80",
  },
  {
    id: 3,
    title: "Official Exchange Program",
    subtitle: "Enjoy Up to ₹2500 Exchange Bonus for F29 Series",
    text:"",
    price: "",
    oldPrice: "",
    image: "https://opsg-img-cdn-gl.heytapimg.com/epb/202505/28/EonXdcLzuBvpnHvL.jpg?x-amz-process=image/format,webp/quality,Q_80",
  },
   {
    id: 4,
    title: "Official Exchange Program",
    subtitle: "Enjoy Up to ₹2500 Exchange Bonus for F29 Series",
    text:"",
    price: "",
    oldPrice: "",
    image: "https://opsg-img-cdn-gl.heytapimg.com/epb/202506/01/eekS5bnMZKkaW7OL.jpg?x-amz-process=image/format,webp/quality,Q_80",
  },
  // Add more slides here
];

export default function HomeSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
   const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };
  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          className={`slide ${index === current ? "active" : ""}`}
          key={slide.id}
        >
          <div className={`text-content ${slide.id > 3 ? "white-text" : ""}`}>
            <h1>{slide.title}</h1>
            <p className="subtitle">{slide.subtitle}</p>
            <p className="subtext">{slide.text}</p>
            <div className="price">
              From <span className="new">{slide.price}</span>{" "}
              <span className="old">{slide.oldPrice}</span>
            </div>
            <button className="buy-btn">Buy now</button>
          </div>
          <img src={slide.image} alt={slide.title} className="slide-image" />
        </div>
      ))}
          <button className="nav-btn prev" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="nav-btn next" onClick={handleNext}>
        &#10095;
      </button>
      <div className="dots">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === current ? "active" : ""}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}
