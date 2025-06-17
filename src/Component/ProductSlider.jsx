import React, { useRef } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import "./ProductSlider.css";

const products = [
  { name: "Phone", image: "https://opsg-img-cdn-gl.heytapimg.com/epb/202503/21/YKAcrYZ1si34XgLW.png?x-amz-process=image/format,webp/quality,Q_80" },
  { name: "Audio", image: "https://opsg-img-cdn-gl.heytapimg.com/epb/202411/04/YjbaCTAPPNpyabxY.png?x-amz-process=image/format,webp/quality,Q_80" },
  { name: "Tablets", image: "https://opsg-img-cdn-gl.heytapimg.com/epb/202411/04/fvu82di8DwH8spcZ.png?x-amz-process=image/format,webp/quality,Q_80" },
  { name: "Accessory", image: "https://opsg-img-cdn-gl.heytapimg.com/epb/202412/25/QZ43h4rNxHH1VNLl.png?x-amz-process=image/format,webp/quality,Q_80" },
  { name: "Exchange", image: "https://opsg-img-cdn-gl.heytapimg.com/epb/202411/04/jcNMbKJBPEgzzJ0Y.png?x-amz-process=image/format,webp/quality,Q_80" },
  { name: "OPPO Care", image: "https://opsg-img-cdn-gl.heytapimg.com/epb/202411/04/tj0iDRYdzvcqguiV.png?x-amz-process=image/format,webp/quality,Q_80" },
  { name: "Check-in", image: "https://opsg-img-cdn-gl.heytapimg.com/epb/202411/04/0oe8vD732BSiVNhB.png?x-amz-process=image/format,webp/quality,Q_80" },
  { name: "Welcome Gi", image: "https://opsg-img-cdn-gl.heytapimg.com/epb/202502/12/0EaKCGfFnI0NqSU5.png?x-amz-process=image/format,webp/quality,Q_80" },
];

// Route mapping
const routeMap = {
  Phone: "/smartphones",
  Audio: "/Earbuds",
  Tablets: "/Tablets",
  Accessory: "/LatestAccessories",
  Exchange: "/exchange",
  "OPPO Care": "/care",
  "Check-in": "/check-in",
  "Welcome Gi": "/welcome-gift",
};

const ProductSlider = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="product-slider-wrapper">
      <button className="arrow left" onClick={() => scroll("left")}>&#8249;</button>

      <div className="product-slider" ref={scrollRef}>
        {products.map((item, index) => (
          <Link
            to={routeMap[item.name] || "/"}
            className="product-item"
            key={index}
          >
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </Link>
        ))}
      </div>

      <button className="arrow right" onClick={() => scroll("right")}>&#8250;</button>
    </div>
  );
};

export default ProductSlider;
