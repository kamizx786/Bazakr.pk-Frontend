import CartItem from "./cartItem";
import {ShoppingBagIcon,ShoppingCartIcon,XCircleIcon} from "@heroicons/react/24/outline"
import items from "./cartArray";
import { Link } from "react-router-dom";

const CartSidebarView = ({setOpencart}) => {
  return (
    <section className="relative flex h-full flex-col">
      <header className="fixed top-0 z-10 w-full max-w-xs flex items-center 
      justify-between border-b border-border-200 border-opacity-75 bg-white py-4">
        {/* <div className="flex font-semibold">
          <ShoppingBagIcon className="text-green-800 h-7 w-7"  />
          <span className="h-7 w-7 flex ml-2 mr-2 text-green-800">
           1 Item
          </span>
        </div> */}
        <button
          onClick={()=>setOpencart(false)}
          className="flex h-7 w-7 text-green-800
          items-center justify-center rounded-full"
        >
          <span className="sr-only">Close</span>
          <XCircleIcon className="h-8 w-8" />
        </button>
      </header>
      {/* End of cart header */}
     
      <div>
     
        <div  className="flex-grow pt-10">
          {items.length > 0 ? (
            items?.map((item) => <CartItem item={item} key={item.id} />)
          ) : (
            <div className="flex h-full flex-col items-center justify-center" >
            <ShoppingCartIcon color="#248F59" width={120} height={156} />
            <h4 className="mt-6 text-base font-semibold">
             No Products
            </h4>
          </div>
          )}
        </div>
      </div>
      {/* End of cart items */}

      <footer className=" bottom-0 z-10 w-full max-w-xs bg-white py-5">
        <button
          className="flex h-12 w-full justify-between rounded-full bg-[#248F59] p-1 text-sm font-bold shadow-700 transition-colors hover:bg-accent-hover focus:bg-accent-hover focus:outline-none md:h-14"
         
        >
          <Link to="/checkout" className="flex h-full flex-1 cursor-pointer items-center px-5 text-light">
            Checkout
          </Link>
          <span className="flex h-full shrink-0 items-center rounded-full bg-light px-5 text-accent">
            0
          </span>
        </button>
      </footer>
      {/* End of footer */}
    </section>
  );
};

export default CartSidebarView;
