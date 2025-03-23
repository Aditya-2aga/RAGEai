// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

// Create the UserContext
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
    UserProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };
    const [ user, setUser ] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
 

