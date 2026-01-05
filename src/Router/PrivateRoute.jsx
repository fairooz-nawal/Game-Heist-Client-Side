import { useContext } from 'react';
import { ContextApi } from '../components/ContextAPI';
import { useNavigate } from 'react-router-dom';
import LoadingPage from '../Pages/LoadingPage';
const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const { user,loading } = useContext(ContextApi);

    if (loading) {
        return <LoadingPage></LoadingPage>
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