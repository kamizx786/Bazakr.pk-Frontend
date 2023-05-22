import CartItem from "./cartItem";
import {ShoppingBagIcon,ShoppingCartIcon,XCircleIcon} from "@heroicons/react/24/outline"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
const CartSidebarView = () => {
const { loggedIn,cart} = useSelector((state) => ({ ...state }));
const dispatch=useDispatch();
const navigate=useNavigate();
let GrandTotal =cart&&cart.length&&cart.reduce((acc, product) => {
  return acc + (product.salePrice * product.order_quantity);
}, 0);

const handleLogin=()=>{
  if(!loggedIn.token){
    dispatch({type:"Visible",payload:true})
    toast.error("Please Login First Before Proceed to Checkout")
    dispatch({type:"CartDrawer",payload:false})
  }else{
    navigate("/checkout");
    dispatch({type:"CartDrawer",payload:false})
  }
 
}

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
          onClick={()=>
            dispatch({type:"CartDrawer",payload:false})
          }
          className="flex h-7 w-7 text-green-800
          items-center justify-center rounded-full"
        >
          <span className="sr-only">Close</span>
          <XCircleIcon className="h-8 w-8" />
        </button>
      </header>
      {/* End of cart header */}
     
      <div>
     
        <div  className="flex-grow pt-10
        
        h-96 overflow-y-auto
        ">
          {cart?.length >0 ? (
            cart?.map((item,index) => <CartItem item={item}
            index={index}
            key={item.id} />)
          ) : (
            <div className="flex h-full flex-col items-center justify-center" >
            <ShoppingBagIcon color="#248F59" width={120} height={156} />
            <h4 className="mt-6 text-base font-semibold">
             Your Cart is Empty
            </h4>
          </div>
          )}
        </div>
      </div>
      {/* End of cart items */}

      <footer className="fixed bottom-0 w-full max-w-xs bg-white py-5">

        <button
          className="flex h-12 w-full justify-between rounded-full bg-[#248F59] p-1 text-sm font-bold shadow-700 transition-colors hover:bg-accent-hover focus:bg-accent-hover focus:outline-none md:h-14"
         onClick={handleLogin}
        >
          <Link  className="flex h-full flex-1 cursor-pointer items-center px-5 text-light">
            Checkout
          </Link>
          <span className="flex h-full shrink-0 items-center rounded-full bg-light px-4 text-accent">
          Rs:{GrandTotal}
          </span>
        </button>
      </footer>
      {/* End of footer */}
    </section>
  );
};

export default CartSidebarView;
