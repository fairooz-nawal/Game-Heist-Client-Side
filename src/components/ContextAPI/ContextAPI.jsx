import { createContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut  } from 'firebase/auth';
import auth from "../../../firebase"

export const ContextApi = createContext();

export const AppProvider = ({ children }) => {
    const [defaultgame,setdefaultgame] = useState([]);
    const [allreview,setReview] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setuser] = useState(null);
    const provider = new GoogleAuthProvider();

    useEffect(()=>{
        fetch('https://game-heist-server.vercel.app/default')
        .then(res => res.json())
        .then(data=>{
            setdefaultgame(data)
        })
    },[])

    useEffect(()=>{
        fetch('https://game-heist-server.vercel.app/review')
        .then(res => res.json())
        .then(data=>{
          setReview(data)
        })
    },[allreview])


    
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

    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (Currentuser) => {
            if (Currentuser) {
             console.log("Logged IN user", Currentuser)
             setuser(Currentuser);
            } else {
              console.log("No user Logged in")
              setuser(null);
            }
          });
          return () =>{
            unsubscribe();
          }
    },[])

    return (
       <ContextApi.Provider value={{defaultgame, createUser,signInUser, googleSignIn,signOutUser,user,allreview}}>
        {children}
       </ContextApi.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

