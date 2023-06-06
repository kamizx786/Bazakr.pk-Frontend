import { combineReducers } from "redux";
import {
  userReducer,
  CategoryReducer,
  ShopsReducer,
  ProductReducer,
  SearchReducer,
  AddtoCart,
  LoginModal,
  SiteReducer,
  Location,
  cartDrawer,
  OrderReducer,
  LocationShopsReducer
} from "./Reducers";


const rootReducers = combineReducers({
  loggedIn: userReducer,
  category: CategoryReducer,
  allShops:ShopsReducer,
  product: ProductReducer,
  search: SearchReducer,
  cart: AddtoCart,
  LoginModal: LoginModal,
  siteSetting:SiteReducer,
  userLocation:Location,
  CartDrawer:cartDrawer,
  Orders:OrderReducer,
  LocationShops:LocationShopsReducer
});

export default rootReducers;
