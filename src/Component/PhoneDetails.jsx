import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PhoneDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const [phone, setPhone] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/phones/${id}`) // Fetch by ID
      .then((res) => setPhone(res.data))
      .catch((err) => console.error("Phone not found", err));
  }, [id]);

  if (!phone) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-2">{phone.name}</h1>
      <img src={`./images/${phone.img}`} alt={phone.name} className="w-40" />
      <p className="text-sm text-gray-700 mt-2">{phone.status}</p>
    </div>
  );
};

export default PhoneDetails;
