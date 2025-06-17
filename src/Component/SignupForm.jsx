import React, { useState } from "react";
import axios from "axios";
import "./SignupForm.css";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
     const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    try {
      const res = await axios.post("https://oppoproject4.onrender.com/api/user/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      alert(res.data.message);
       navigate("/signin");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed.");
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />

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

        <small>Password must be 6-16 characters with digits, letters, or symbols.</small>

        <div className="checkbox-group">
          <input type="checkbox" name="agreeTerms" onChange={handleChange} />
          <span>
            I agree to the <a href="#">User Agreement</a> and <a href="#">Privacy Notice</a>
          </span>
        </div>

        <button className="create-account-btn" type="submit">Create account</button>
      </form>
    </div>
  );
};

export default SignupForm;
