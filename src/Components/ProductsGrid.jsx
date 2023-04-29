import React from "react";
import ProductLoader from "./product-loader";
import jsxRangeMap from "./range-map";
import Product from "./Product";
import ProductCard from "./ProductCard";
import { Button } from "antd";
const ProductsGrid = () => {
  const limit = 10;
  return (
    <div className="w-full mt-5 mb-5">
      <div className="mb-5 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3">
        {!Product?.length
          ? jsxRangeMap(limit, (i) => (
              <ProductLoader key={i} uniqueKey={`product-${i}`} />
            ))
          : Product?.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
      </div>
      <div className="flex justify-center">
      <Button className="h-12 p-2 text-white bg-[#248F59]  text-sm font-semibold md:text-base">
        Load More
      </Button>
      </div>
      {/* {hasMore && (
      <div className="mt-8 flex justify-center lg:mt-12">
        <Button
          loading={isLoadingMore}
          onClick={loadMore}
          className="h-11 text-sm font-semibold md:text-base"
        >
          {t('text-load-more')}
        </Button>
      </div>
    )} */}
    </div>
  );
};

export default ProductsGrid;
