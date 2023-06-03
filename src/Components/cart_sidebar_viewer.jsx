import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CartItem from "./cartItem";
const CartSidebarView = () => {
  const { loggedIn, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let GrandTotal =
    cart &&
    cart.length &&
    cart.reduce((acc, product) => {
      return acc + product.salePrice * product.order_quantity;
    }, 0);

  const handleLogin = () => {
    if (!loggedIn.token) {
      dispatch({ type: "Visible", payload: true });
      toast.error("Please Login First Before Proceed to Checkout");
      dispatch({ type: "CartDrawer", payload: false });
    } else {
      navigate("/checkout");
      dispatch({ type: "CartDrawer", payload: false });
    }
  };

  return (
    <section className="relative flex h-full flex-col">
      <div
        className="fixed top-0  w-full max-w-xs flex items-center 
        justify-between pl-3 bg-white py-2"
      >
        <h1 className="text-[#248f59] text-2xl font-serif font-normal">
          My Cart
        </h1>
        <button
          onClick={() => dispatch({ type: "CartDrawer", payload: false })}
        >
          <AiOutlineCloseCircle size={25} color="green" />
        </button>
      </div>
      {/* End of cart header */}

      <div>
        <div className="flex-grow pt-2 h-96 overflow-y-auto">
          {cart?.length > 0 ? (
            cart?.map((item, index) => (
              <CartItem item={item} index={index} key={item.id} />
            ))
          ) : (
            <div className="flex h-full flex-col items-center justify-center">
              <ShoppingBagIcon color="#248F59" width={120} height={156} />
              <h4 className="mt-6 text-base font-semibold">
                Your Cart is Empty
              </h4>
            </div>
          )}
        </div>
      </div>
      {/* End of cart items */}

      <footer className="fixed bottom-0 font-sans w-full max-w-xs bg-white py-5">
        <button
          className="flex h-12 w-full justify-between rounded-full bg-[#248F59] p-1 text-sm font-bold shadow-700 transition-colors hover:bg-accent-hover focus:bg-accent-hover focus:outline-none md:h-14"
          onClick={handleLogin}
        >
          <Link className="flex h-full text-[#f2f2f2] flex-1 cursor-pointer items-center px-5 hover:text-white transition-transform hover:scale-95">
            Checkout
          </Link>
          <span className="flex h-full shrink-0 items-center rounded-full bg-light px-4 ">
            Rs:{GrandTotal}
          </span>
        </button>
      </footer>
      {/* End of footer */}
    </section>
  );
};

export default CartSidebarView;
