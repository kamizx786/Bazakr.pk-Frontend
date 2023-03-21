import React from "react";  
import SellerHome from "../../Components/Seller-board/SellerHome";
import SideBar from "../../Components/Seller-board/Sidebar";
     
const SellerDashboard=()=>{
    return(
        <div className="flex">
            <SideBar/>
          <SellerHome/>
    
        </div>
    );
}
export default SellerDashboard;