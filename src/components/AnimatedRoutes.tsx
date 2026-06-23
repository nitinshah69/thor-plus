import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Home from '../pages/Home';
import Product from '../pages/Product';
import About from '../pages/About';
import Contact from '../pages/Contact';
import FAQ from '../pages/FAQ';
import Order from '../pages/Order';
import Admin from '../pages/Admin';

export default function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </AnimatePresence>
  );
}
