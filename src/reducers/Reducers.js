let initialUser={};
if(localStorage.getItem("auth"))
{
   initialUser=JSON.parse(window.localStorage.getItem("auth"));
}
else{
   initialUser={};
}
export const userReducer=(state=initialUser,action)=>{
 switch(action.type){
    case "LOGGED_IN_USER":
    return action.payload;
    case "LOGOUT":
    return action.payload;
    default:
    return state;
 }
}
export const SiteReducer=(state=null,{type,payload})=>{
   switch(type){
      case "GET_SETTINGS":
      return payload;
      default:
      return state;
   }
}
export const CategoryReducer=(state=null,{type,payload})=>{
   switch(type){
      case "GET_CATEGORIES":
      return payload;
      default:
      return state;
   }
}

export const ShopsReducer=(state=null,{type,payload})=>{
   switch(type){
      case "GET_SHOPS":
      return payload;
      default:
      return state;
   }
}
export const ProductReducer=(state=null,{type,payload})=>{
   switch(type){
      case "GET_PRODUCTS":
      return payload;
      default:
      return state;
   }
}
export const OrderReducer=(state=null,{type,payload})=>{
   switch(type){
      case "Orders":
      return payload;
      default:
      return state;
   }
}
let initial=[];
if(localStorage.getItem("cart"))
{
   initial=JSON.parse(window.localStorage.getItem("cart"));

}
else{
   initial=[];
}
export const AddtoCart=(state=initial,{type,payload})=>{
   switch(type){
      case "Cart":
      return payload;
      default:
      return state;
   }
}
let initialLocation={};
if(localStorage.getItem("location"))
{
   initialLocation=JSON.parse(window.localStorage.getItem("location"));

}
else{
   initialLocation={};
}
export const Location=(state=initialLocation,{type,payload})=>{
   switch(type){
      case "LOCATION":
      return payload;
      default:
      return state;
   }
}
export const SearchReducer=(state={text:""},{type,payload})=>{
   switch(type){
      case "Search":
      return {...state,...payload};
      default:
      return state;
   }
}
export const LoginModal=(state=false,{type,payload})=>{
   switch(type){
      case "Visible":
      return payload;
      default:
      return state;
   }
}
export const cartDrawer=(state=false,{type,payload})=>{
   switch(type){
      case "CartDrawer":
      return payload;
      default:
      return state;
   }
}
