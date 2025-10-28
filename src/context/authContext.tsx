import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

export const API_URL = "https://morimitsu-jiu-jitsu.onrender.com";

const api = axios.create({
  baseURL: API_URL,
});

interface AuthState {
  token: string | null;
  authenticated: boolean | null;
  username: string | null;
}

interface AuthProps {
  authState: AuthState;
  authReady: boolean;
  onLogin: (email: string, password: string, role: string) => Promise<any>;
  onLogout: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthProps | undefined>(undefined);

export const useAuth = (): AuthProps => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth deve ser usado dentro de um <AuthProvider>");
  return context;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authState, setAuthState] = useState<AuthState>({
    token: null,
    authenticated: null,
    username: null,
  });

  const [authReady, setAuthReady] = useState(false);

  // Carregar token e username salvos no primeiro render
  useEffect(() => {
    const token = localStorage.getItem("my-jwt");
    const username = localStorage.getItem("username");
  
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setAuthState({ token, authenticated: true, username });
    } else {
      setAuthState({ token: null, authenticated: false, username: null });
    }
  
    setAuthReady(true);
  }, []);  

  const login = async (email: string, password: string, role: string) => {
    try {
      const result = await api.post(`/auth/login`, { email, password, role });
      const { token, user } = result.data;
  
      if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        localStorage.setItem("my-jwt", token);
        localStorage.setItem("username", user.name);
        localStorage.setItem("role", user.role);
  
        setAuthState({
          token,
          authenticated: true,
          username: user.name,
        });
  
        return { error: false };
      }
  
      return { error: true, msg: "Usuário ou senha inválidos" };
    } catch (e: any) {
      return {
        error: true,
        msg: e.response?.data?.msg || "Erro ao fazer login",
      };
    }
  };
  

  const logout = async () => {
    localStorage.removeItem("my-jwt");
    localStorage.removeItem("username");
    delete axios.defaults.headers.common["Authorization"];
    setAuthState({ token: null, authenticated: false, username: null });
  };

  const value: AuthProps = {
    authState,
    authReady,
    onLogin: login,
    onLogout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
