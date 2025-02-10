import { createContext, use, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import auth from "../../../firebase"

export const ContextApi = createContext();

export const AppProvider = ({ children }) => {
    const [defaultgame,setdefaultgame] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setuser] = useState(null);
    const provider = new GoogleAuthProvider();

    useEffect(()=>{
        fetch('http://localhost:5000/default')
        .then(res => res.json())
        .then(data=>{
            setdefaultgame(data)
        })
    },[])

    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res =>res.json())
        .then(data =>{
            setuser(data);
        })
    },[])
    
    const createUser = (email,password) =>{
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn =()=>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    return (
       <ContextApi.Provider value={{defaultgame, createUser,signInUser, googleSignIn}}>
        {children}
       </ContextApi.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

