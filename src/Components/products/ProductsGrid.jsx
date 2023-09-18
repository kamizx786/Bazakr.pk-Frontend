import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductLoader from "./product-loader";
import jsxRangeMap from "../range-map";
const ProductsGrid = ({ products , keyword,
  Searched, ok,setOk}) => {
  const [product, setProducts] = useState([]);
  const limit = 10;
  useEffect(() => {
    setProducts(products.slice(0, 10));
  }, [products]);
  const LoadMore = (e) => {
    e.preventDefault();
    setProducts(products.slice(0, product?.length + 5));
  };
  return (
    <div className="w-full my-3">
      <div className="mb-5 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3">
        {!product?.length
          ? jsxRangeMap(limit, (i) => (
              <ProductLoader key={i} uniqueKey={`product-${i}`} />
            ))
          :  product?.filter(Searched(keyword)).map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
      </div>
      <div className="flex justify-center">
        {products?.length > 10 && product?.length<products?.length? (
          <button
            className="bg-[#248F59] text-[#f2f2f2] hover:text-white font-sans  py-3 px-3 rounded transition-transform hover:scale-95 uppercase font-semibold "
            onClick={LoadMore}
          >
            Load More
          </button>
        ):""}
      </div>
    </div>
  );
};

export default ProductsGrid;
