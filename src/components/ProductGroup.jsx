import React, { useContext } from "react";
import { GeneralContext } from "../contexts/GeneralContext";
import Product from "./Product";

const ProductGroup = () => {
  const { products } = useContext(GeneralContext);

  return (
    <div id="productGroup" className="p-3">
      {products.map((product) => (
        <Product key={product.id} product={product} /> // object as prop {...product}
      ))}
    </div>
  );
};

export default ProductGroup;
