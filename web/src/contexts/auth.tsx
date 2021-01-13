import React, { createContext, useContext, useEffect, useState } from "react";

import api from '../services/api';

interface User {
    id: string
    name: string;
    email: string;
}

interface AuthContextData {
    signed: boolean;
    user: User | null;
    signIn(email: string, password: string): Promise<any>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

//JWT (Stateless)
export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const storagedUser = localStorage.getItem('@HappyAuth:user');
        const storagedToken = localStorage.getItem('@HappyAuth:token');

        if (storagedUser && storagedToken) {
            api.defaults.headers.authorization = `Bearer ${storagedToken}`;
            setUser(JSON.parse(storagedUser));
        }
    }, []);

    async function signIn(email: string, password: string) {
        const data = { email, password }

        const response = await api.post("auth", data); //api response

        setUser(response.data);

        api.defaults.headers.authorization = `Bearer ${response.data[1]}`;

        localStorage.setItem('@HappyAuth:user', JSON.stringify(response.data[0]));
        localStorage.setItem('@HappyAuth:token', response.data[1]);

        return response;
    }

    function signOut() {
        localStorage.clear()
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{signed: !!user, user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
};


export function useAuth() {
    const context = useContext(AuthContext);

    return context;
};