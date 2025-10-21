import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

// URL base 
export const API_URL = "https://morimitsu-jiu-jitsu.onrender.com";

// Cria uma instância do axios com baseURL
const api = axios.create({
  baseURL: API_URL,
});

// Tipagem das props do contexto
interface AuthProps {
  authState: {
    token: string | null;
    authenticated: boolean | null;
  };
  onRegister: (Email: string, Password: string, userName: string) => Promise<any>;
  onLogin: (Email: string, Password: string) => Promise<any>;
  onLogout: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

// Criação do contexto
const AuthContext = createContext<AuthProps | undefined>(undefined);

// Hook para acessar o contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};

// Provedor do contexto
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
  }>({
    token: null,
    authenticated: null,
  });

  // Carregar token do localStorage
  useEffect(() => {
    const token = localStorage.getItem("my-jwt");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setAuthState({
        token,
        authenticated: true,
      });
    } else {
      setAuthState({
        token: null,
        authenticated: false,
      });
    }
  }, []);

  // Registrar novo usuário
  const register = async (Email: string, Password: string, userName: string) => {
    try {
      const result = await api.post(`/user`, { Email, Password, userName });
      const token = result.data.token;
      const username = result.data.User;

      if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        localStorage.setItem("my-jwt", token);
        localStorage.setItem("userName", username);
        setAuthState({ token, authenticated: true });
      }

      return result;
    } catch (e: any) {
      return {
        error: true,
        msg: e.response?.data?.msg || "Erro ao registrar",
        status: e.response?.status,
      };
    }
  };

  // Login do usuário
  const login = async (Email: string, Password: string) => {
    try {
      const result = await api.post(`/user/login`, { Email, Password });
      const { userId } = result.data;

      if (userId) {
        api.defaults.headers.common["Authorization"] = `Bearer ${userId}`;
        localStorage.setItem("my-jwt", userId);
        setAuthState({ token: userId, authenticated: true });
      }

      return result;
    } catch (e: any) {
      return {
        error: true,
        msg: e.response?.data?.msg || "Erro ao fazer login",
      };
    }
  };

  // Logout
  const logout = async () => {
    localStorage.removeItem("my-jwt");
    localStorage.removeItem("userName");
    delete api.defaults.headers.common["Authorization"];
    setAuthState({ token: null, authenticated: false });
  };

  // Valor exposto para toda a aplicação
  const value: AuthProps = {
    authState,
    onRegister: register,
    onLogin: login,
    onLogout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
