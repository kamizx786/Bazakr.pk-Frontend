import {toast} from "react-toastify"
import axios from "axios";
export const AllShops = async (dispatch) => {
    const { data } = await axios.get("/shop/Shops");
    if(data.error){
      toast.error(data.error);
    }else{
      dispatch({
        type:"GET_SHOPS",
        payload:data.shops
      })
    }
  };
  export const AllProducts = async (dispatch) => {
    const { data } = await axios.get("/allProducts");
    if(data.error){
      toast.error(data.error);
    }else{
      dispatch({
        type:"GET_PRODUCTS",
        payload:data.products
      })
    }
  };