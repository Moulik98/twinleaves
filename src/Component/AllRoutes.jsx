import React from 'react';
import { Route, Routes } from "react-router-dom";
import ProductDetails from './ProductDetails';
import Products from './Products';


const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element= {<Products />} />
    <Route path="/details" element= {<ProductDetails />} />
    <Route path="*" element= {<h3>Page Not Found</h3>} />
   </Routes>
  )
}

export default AllRoutes;