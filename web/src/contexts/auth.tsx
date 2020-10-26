import React, { createContext } from 'react';

const AuthContext = createContext({signed: true});

export const AuthProvider = ({ children }) => {
    <AuthContext.Provider value={{signed: false}}>
        {children}
    </AuthContext.Provider>
};

export default AuthContext;