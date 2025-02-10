import { useContext } from 'react';
import { ContextApi } from '../ContextAPI/ContextAPI';
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({ children }) => {

    const {user} = useContext(ContextApi);
    
    if(!user=="null"){
        return children;
    }
    return (
        <div>
            <Navigate to="/signIn"></Navigate>
        </div>
    );
};

export default PrivateRoute;