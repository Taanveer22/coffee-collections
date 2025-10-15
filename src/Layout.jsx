import { Outlet } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto min-h-[calc(100vh-242px)] my-12">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Layout;
