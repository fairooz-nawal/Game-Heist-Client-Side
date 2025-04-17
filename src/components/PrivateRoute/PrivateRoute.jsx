import { useContext } from 'react';
import { ContextApi } from '../ContextAPI/ContextAPI';
import { useNavigate } from 'react-router-dom';
const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const { user } = useContext(ContextApi);

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