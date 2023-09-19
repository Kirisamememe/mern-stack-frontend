import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import jwt_decode from 'jwt-decode';
import * as Types from "../types"

export const AuthContext = createContext<Types.AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [loginUser, setLoginUser] = useState<Types.LoginUserType | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decoded = jwt_decode(token) as Partial<{ email: string }>
                if (decoded.email !== undefined) {
                    setLoginUser({
                        email: decoded.email,
                        avatar: localStorage.getItem('avatar') || null, 
                        userId: localStorage.getItem('userId')!
                    });
                }
            } catch (error) {
                // handle error
            }
        }
    }, []);

    return (
        <AuthContext.Provider value={{ loginUser, setLoginUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
//useAuthは名前付きエクスポートだから、インポートする際は{}が必要。default exportの場合は{}は不要
