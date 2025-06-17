import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FaSearch, FaUserCircle, FaShoppingBag } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import SearchBar from "./SearchBar";

const seriesLinks = [
  "Find N Series",
  "Find X Series",
  "Reno Series",
  "F Series",
  "A Series",
  "K Series",
];

const Navbar = () => {
  const [phones, setPhones] = useState([]);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const menuRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch phones
    axios
      .get("https://oppoproject4.onrender.com/api/product")
      .then((res) => {
        setPhones(res.data);
      })
      .catch((err) => {
        console.error("Error fetching phone data:", err);
      });

    // Detect click outside
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    // Check if user is logged in
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img
            src="https://logo-base.com/logo/oppo_logo_black_png_white.png"
            alt="Oppo Logo"
            className="logo"
          />
        </Link>
        <ul className="nav-links">
          <li className="dropdown smartphones-dropdown">
            <Link to="/smartphones">Smartphones</Link>
            <div className="mega-menu">
              <div className="mega-menu-content">
                <div className="phone-cards">
                  {phones
                    .filter((phone) => phone.category === "Smartphone")
                    .slice(0, 6)
                    .map((phone, index) => (
                      <div key={index} className="phone-card">
                        <img src={phone.image} alt={phone.name} />
                        <p>{phone.name}</p>
                        <span className="new-badge">New</span>
                      </div>
                    ))}
                </div>

                <div className="series-tabs">
                  {seriesLinks.map((series, index) => (
                    <Link
                      key={index}
                      to={`/smartphones#${series
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {series}
                    </Link>
                  ))}
                </div>

                <div className="menu-buttons">
                  <button className="compare-btn">Compare</button>
                  <Link to="/smartphones" className="view-all-btn">
                    View All Phones
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown smartphones-dropdown">
            <Link to="/tablets">Tablets</Link>
            <div className="mega-menu tablets-menu">
              <div className="mega-menu-content">
                <div className="phone-card">
                  <img
                    src="https://image.oppo.com/content/dam/oppo/in/mkt/homepage/new-navi/1025/pad.png.thumb.webp"
                    alt="OPPO Pad Air"
                  />
                  <p>OPPO Pad Air</p>
                </div>
                <div className="menu-buttons">
                  <Link to="/tablets" className="view-all-btn">
                    View Tablets
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown smartphones-dropdown">
            <Link to="/Earbuds">Audio</Link>
             <div className="mega-menu tablets-menu">
              <div className="mega-menu-content">
                <div className="phone-cards">
                  {phones
                    .filter((phone) => phone.category === "Audio")
                    .slice(0, 2)
                    .map((phone, index) => (
                      <div key={index} className="phone-card">
                        <img src={phone.image} alt={phone.name} />
                        <p>{phone.name}</p>
                        <span className="new-badge">New</span>
                      </div>
                    ))}
      
                </div>
                <div className="menu-buttons">
                  <Link to="/tablets" className="view-all-btn">
                    View Tablets
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown smartphones-dropdown">
            <Link to="/LatestAccessories">Accessories</Link>
              <div className="mega-menu tablets-menu">
              <div className="mega-menu-content">
                <div className="phone-cards">
                  {phones
                    .filter((phone) => phone.category === "Charger" || phone.category === "Power")
                    .slice(0, 4)
                    .map((phone, index) => (
                      <div key={index} className="phone-card">
                        <img src={phone.image} alt={phone.name} />
                        <p>{phone.name}</p>
                        <span className="new-badge">New</span>
                      </div>
                    ))}
      
                </div>
                <div className="menu-buttons">
                  <Link to="/tablets" className="view-all-btn">
                    View Tablets
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li>About OPPO</li>
          <li>
            <Link to="/">Store</Link>
          </li>
          <li>ColorOS</li>
          <li>Support</li>
          <li>Community</li>
          <li>My OPPO</li>
        </ul>
      </div>

      <div className="navbar-right">
        <SearchBar />

        <div className="profile-wrapper" ref={menuRef}>
          <FaUserCircle className="icon" onClick={() => setOpen(!open)} />

          {open && (
            <div className="profile-dropdown">
              {user ? (
                <>
                  <div className="profile-header">
                    <div className="avatar">👤</div>
                    <div className="greeting">
                      <p>Hi, {user?.name ?? "guest"}</p>

                      <button onClick={handleLogout} className="logout-btn">
                        Logout
                      </button>
                    </div>
                  </div>
                  <ul className="profile-menu">
                    <li>
                      <Link to="/profile">👤 Profile</Link>
                    </li>
                    <li>
                      <Link to="/orders">📦 Orders</Link>
                    </li>
                  </ul>
                </>
              ) : (
                <div className="profile-header">
                  <div className="avatar">👤</div>
                  <div className="greeting">
                    <p>Hi, Guest</p>
                    <Link to="/signup">Sign up</Link> &nbsp; | &nbsp;
                    <Link to="/signin">Sign in</Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <Link to="/cart">
          {" "}
          <FaShoppingBag className="icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
