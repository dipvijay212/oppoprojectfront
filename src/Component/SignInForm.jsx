import React, { useState } from "react";
import axios from "axios";
import "./SignupForm.css";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://oppoproject4.onrender.com/api/user/login",
        {
          email: formData.email,
          password: formData.password,
        },
        { withCredentials: true } // send/receive cookie
      );

      alert("Login successful");

      // ✅ Save user data in sessionStorage
      sessionStorage.setItem("user", JSON.stringify(res.data));

      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button className="create-account-btn" type="submit">
          Sign In
        </button>

        <p style={{ marginTop: "12px", fontSize: "14px" }}>
          Don't have an account? <a href="/signup">Create one</a>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
