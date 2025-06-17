import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://oppoproject4.onrender.com/api/product")
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const results = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredResults(results);
      setShowDropdown(true);
    } else {
      setFilteredResults([]);
      setShowDropdown(false);
    }
  }, [searchTerm, products]);

  const handleSelect = (product) => {
    setSearchTerm("");
    setShowDropdown(false);
    navigate(`/product/${product._id}`);
  };

  return (
    <div className="search-bar-wrapper">
      <div className="search-bar">
        <FaSearch className="icon" />
        <input
          type="text"
          placeholder="Search OPPO.com"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => searchTerm && setShowDropdown(true)}
        />
      </div>
      {showDropdown && filteredResults.length > 0 && (
        <ul className="search-dropdown">
          {filteredResults.map(product => (
            <li key={product._id} onClick={() => handleSelect(product)}>
              {product.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
