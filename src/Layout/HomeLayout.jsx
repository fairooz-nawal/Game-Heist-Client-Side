
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
const HomeLayout = () => {
    return (
        <div className="max-w-screen mx-auto manrope-normal">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
};

export default HomeLayout;