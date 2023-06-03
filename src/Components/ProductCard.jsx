import { Modal } from "antd";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import Card from "../Pages/Products/Card";
const ProductCard = ({ product }) => {
  const [open, setOpen] = useState(false);
  const handleModal = () => {
    setOpen(true);
  };
  return (
    <>
      <div
        className="flex flex-col gap-3 h-full transform overflow-hidden rounded bg-white  p-4
         transition-all duration-200 hover:-translate-y-0.5 hover:shadow-downfall-lg border-[#f2f2f2]"
        // onClick={handleProductQuickView}
        role="button"
      >
        <div className="relative flex md:h-72 h-60 w-auto items-center justify-center">
          <span className="sr-only"></span>
          <img src={product?.feature_pic?.url} className="object-cover h-full w-full rounded" />

          {product?.totalSold > 9 && (
            <div className="absolute top-3 rounded bg-accent px-1.5 text-xs font-semibold leading-6 text-white bg-[#248F59] left-3  sm:px-2 md:top-[22px] md:px-2.5 md:left-4 ">
              Best Selling
            </div>
          )}

          <div className="absolute top-3 right-3  md:top-4 md:right-4 bg-gray-100 p-1 rounded">
            <button
              onClick={handleModal}
              className="flex  items-center justify-center rounded  text-sm text-heading transition-colors"
            >
              <AiOutlineEye className="stroke-2" color="green" size={25}/>
            </button>
          </div>
        </div>
        {/* End of product image */}
        <Link to={`/product/${product.slug}`}>
          <header className="p-1 md:p-6">
            {/* {product_type.toLowerCase() === 'variable' ? (
        <div className="mb-2">
          <span className="text-sm font-semibold text-heading md:text-base">
            {minPrice}
          </span>
          <span> - </span>
          <span className="text-sm font-semibold text-heading md:text-base">
            {maxPrice}
          </span>
        </div>
      ) : (
        <div className="mb-2 flex items-center">
          <span className="text-sm font-semibold text-heading md:text-base">
            {price}
          </span>
          {basePrice && (
            <del className="text-xs text-body ltr:ml-2 rtl:mr-2 md:text-sm">
              {basePrice}
            </del>
          )}
        </div>
      )} */}
            {/* End of product price */}
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-serif font-normal w-contain truncate">
                {product?.name}
              </h3>
              <span className="text-lg font-medium font-sans text-[#248f59] text-heading md:text-base">
                {product?.salePrice}/<span className="text-xs font-semibold">Rs</span>
              </span>
            </div>

            {/* End of product title */}
          </header>
        </Link>
      </div>

      <Modal
        width={1000}
        footer={null}
        open={open}
        onCancel={() => setOpen(false)}
        closable="false"
      >
        <Card ModalProduct={product} setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default ProductCard;
