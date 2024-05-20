import React, { createContext, useContext, useState, ReactNode, ReactElement } from 'react';

interface User {
    name: string;
    role: string;
}

interface AuthContextType {
    user: User | null;
    login: (username: string, password: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }): ReactElement => {
    const [user, setUser] = useState<User | null>(null);
    

    const login = (username: string, password: string) => {
        if (username === process.env.REACT_APP_USER_NAME && password === process.env.REACT_APP_USER_PASSWORD) {
            setUser({
                name: username,
                role: process.env.REACT_APP_USER_ROLE!
            });
        } else {
            alert('Invalid credentials');
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext)!; // Ensure non-null assertion here for better type safety