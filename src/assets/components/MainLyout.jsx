import Footer from "./Footer";

import Nav from "./Nav";
import { Outlet } from "react-router-dom";






const MainLyout = () => {
    return (
        <div>
            <div>
               <Nav></Nav>
              
            </div>
            <Outlet></Outlet>
            
            
            <Footer></Footer>
        </div>
    );
};

export default MainLyout;