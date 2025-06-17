import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Order from './pages/Order';
import { Contact } from './pages/Contact';
import ProductDetails from './Component/ProductDetails';
import SignupForm from './Component/SignupForm';
import SignInForm from './Component/SignInForm';
import LatestProducts from './Component/LatestProducts';
import TabletGrid from './Component/TabletGrid';
import CartPage from './pages/CartPage';
import { CartProvider } from './contextApi/CartContext';
import CheckoutPage from './Component/CheckoutPage';
import { ToastContainer } from 'react-toastify';
import AllOrdersPage from './pages/AllOrdersPage';
import EarbudsSection from './Component/EarbudsSection';
import LatestAccessories from './Component/LatestAccessories';





function App() {
  return (
     <CartProvider>
      <ToastContainer position="top-center" autoClose={2000} />
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/signup" element={<SignupForm />} /> 
          <Route path="/signin" element={<SignInForm />} />
           <Route path="/smartphones" element={<LatestProducts/>} />
           <Route path="/Tablets" element={<TabletGrid/>} />
             <Route path="/Earbuds" element={<EarbudsSection/>} />
               <Route path="/LatestAccessories" element={<LatestAccessories/>} />
        {/* <Route path="/smartphone/:id" element={<PhoneDetails />} /> */}
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
         <Route path="/checkout" element={<CheckoutPage/>} />
        <Route path="/order" element={<Order />} />
         <Route path="/orders" element={<AllOrdersPage/>} />
        <Route path="/contact" element={<Contact />} />
       
       
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
