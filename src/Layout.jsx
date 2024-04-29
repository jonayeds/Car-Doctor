import { Outlet } from "react-router-dom";
import Footer from "./SharedComponents/Footer";
import Nav from "./SharedComponents/Nav";


const Layout = () => {
    return (
        <div>
           <div className="max-w-7xl mx-auto">
           <Nav></Nav>
            <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;