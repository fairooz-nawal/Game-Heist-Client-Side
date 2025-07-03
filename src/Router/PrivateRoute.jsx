import { useContext } from 'react';
import { ContextApi } from '../components/ContextAPI';
import { useNavigate } from 'react-router-dom';
const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const { user,loading } = useContext(ContextApi);

    if (loading) {
        return <div className="max-w-full md:max-w-8xl lg:max-w-8xl mx-auto manrope-normal py-[100px]  bg-gray-900"><span className="loading loading-bars loading-xl text-white"></span></div>;
    }
    if (user) {
        return children;
    }
    else {
        navigate('/signIn');
    }
    return (
        <div></div>
    );
};

export default PrivateRoute;