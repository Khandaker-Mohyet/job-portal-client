import { Outlet } from "react-router-dom";
import Home from "../Pages/Home";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";


const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;