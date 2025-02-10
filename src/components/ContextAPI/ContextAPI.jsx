import { createContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';

export const ContextApi = createContext();

export const AppProvider = ({ children }) => {
    const [defaultgame,setdefaultgame] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/default')
        .then(res => res.json())
        .then(data=>{
            setdefaultgame(data)
        })
    },[])

    return (
       <ContextApi.Provider value={{defaultgame}}>
        {children}
       </ContextApi.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

