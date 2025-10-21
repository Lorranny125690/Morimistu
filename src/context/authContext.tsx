import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react"; // ✅ obrigatório por causa do verbatimModuleSyntax

// URL base da sua API
export const API_URL = "https://morimitsu-jiu-jitsu.onrender.com";

// Cria instância do Axios
const api = axios.create({
  baseURL: API_URL,
});

// Tipos do contexto
interface AuthProps {
  authState: {
    token: string | null;
    authenticated: boolean | null;
  };
  onLogin: (email: string, password: string) => Promise<any>;
  onLogout: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

// Criação do contexto
const AuthContext = createContext<AuthProps | undefined>(undefined);

// Hook customizado
export const useAuth = (): AuthProps => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth deve ser usado dentro de um <AuthProvider>");
  return context;
};

// Provider principal
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
  }>({
    token: null,
    authenticated: null,
  });

  // Carregar token salvo
  useEffect(() => {
    const token = localStorage.getItem("my-jwt");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setAuthState({ token, authenticated: true });
    } else {
      setAuthState({ token: null, authenticated: false });
    }
  }, []);

  // Função de login
  const login = async (email: string, password: string) => {
    try {
      const result = await api.post(`/auth/login`, { email, password });
      const { token } = result.data;
      
      if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        localStorage.setItem("my-jwt", token);
        setAuthState({ token, authenticated: true });
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

  // Função de logout
  const logout = async () => {
    localStorage.removeItem("my-jwt");
    localStorage.removeItem("userName");
    delete api.defaults.headers.common["Authorization"];
    setAuthState({ token: null, authenticated: false });
  };

  // Valor exposto
  const value: AuthProps = {
    authState,
    onLogin: login,
    onLogout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
