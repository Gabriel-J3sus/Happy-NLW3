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
    signIn(data: object, route: string): Promise<any>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

//JWT (Stateless)
export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        async function authorization() {
            const storagedUser = localStorage.getItem('@HappyAuth:user');
            const storagedToken = localStorage.getItem('@HappyAuth:token');
            
            if (storagedUser && storagedToken) {
    
                await api.post('token', { 
                    headers: {
                        'Authorization': api.defaults.headers.authorization = `Bearer ${storagedToken}`
                    }
                })//heders
    
                setUser(JSON.parse(storagedUser));
                
            }
        }

        authorization()
    }, []);

    async function signIn(data: object, route: string) {

        const response = await api.post(route, data); //api response and request, login or create user
        
        const authResponse = await api.post('token', { headers: {'Authorization': api.defaults.headers.authorization = `Bearer ${response.data[1]}`} }) //headers

        setUser(authResponse.data);

        localStorage.setItem('@HappyAuth:user', JSON.stringify(response.data[0]));
        localStorage.setItem('@HappyAuth:token', response.data[1]);

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