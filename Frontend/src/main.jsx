import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'

import HomePage from "../landing_page/home/HomePage"
import SignUp from "../landing_page/signUp/SignUp"
import AboutPage from "../landing_page/About/AboutPage"
import PricingPage from "../landing_page/Pricing/PricingPage";
import ProductPage from "../landing_page/product/ProductPage"
import SupportPage from "../landing_page/support/SupportPage"

import Navbar from "../landing_page/Navbar";
import Footer from "../landing_page/Footer";



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/support" element={<SupportPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
