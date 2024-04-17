import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import LatestProducts from "./LatestProducts";

const Products = () => {
  return (
    <>
      <div>
        Products{" "}
        <div>
          To check the new products click on the link!{" "}
          <Link to="latest-products">Latest products</Link>
        </div>
      </div>
      <Routes>
        <Route path="/latest-products" element={<LatestProducts />} />
      </Routes>
    </>
  );
};

export default Products;
