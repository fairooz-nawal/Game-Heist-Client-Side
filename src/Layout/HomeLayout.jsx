
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
const HomeLayout = () => {
    return (
        <div className="max-w-full md:max-w-screen lg:max-w-screen mx-auto manrope-normal bg-black">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
};

export default HomeLayout;