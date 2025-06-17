import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductFilter.css";

const ProductFilter = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [filters, setFilters] = useState({
    series: "",
    battery: "",
    memory: "",
    support5G: "",
  });

  useEffect(() => {
    axios
      .get("https://oppoproject4.onrender.com/api/product")
      .then((res) => {
        setProducts(res.data);
        setFiltered(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleReset = () => {
    setFilters({
      series: "",
      battery: "",
      memory: "",
      support5G: "",
    });
    setFiltered(products);
  };

  const applyFilters = () => {
    let result = [...products];

    if (filters.series)
      result = result.filter((p) =>
        p.name.toLowerCase().includes(filters.series.toLowerCase())
      );

    if (filters.battery)
      result = result.filter((p) => Number(p.battery) >= Number(filters.battery));

    if (filters.memory)
      result = result.filter((p) =>
        p.features?.toLowerCase().includes(filters.memory.toLowerCase())
      );

    if (filters.support5G)
      result = result.filter(
        (p) => p.features?.toLowerCase().includes("5g")
      );

    setFiltered(result);
  };

  return (
    <div className="filter-container" id="filters">
      <h3>Search by Filters</h3>
      <h2>Let's find your smartphones.</h2>

      <div className="filters">
        <select name="series" value={filters.series} onChange={handleFilterChange}>
          <option value="">Phone Series</option>
          <option value="Find N">Find N Series</option>
          <option value="Find X">Find X Series</option>
          <option value="Reno">Reno Series</option>
          <option value="A">A Series</option>
        </select>

        <select name="battery" value={filters.battery} onChange={handleFilterChange}>
          <option value="">Battery</option>
          <option value="4000">4000mAh+</option>
          <option value="5000">5000mAh+</option>
          <option value="6000">6000mAh+</option>
        </select>

        <select name="memory" value={filters.memory} onChange={handleFilterChange}>
          <option value="">Memory</option>
          <option value="8gb">8GB RAM</option>
          <option value="12gb">12GB RAM</option>
          <option value="256gb">256GB Storage</option>
        </select>

        <select name="support5G" value={filters.support5G} onChange={handleFilterChange}>
          <option value="">5G</option>
          <option value="true">Yes</option>
        </select>
      </div>

      <div className="filter-actions">
        <span className="reset" onClick={handleReset}>Reset</span>
        <button className="apply-btn" onClick={applyFilters}>
          Find {filtered.length} Results
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
