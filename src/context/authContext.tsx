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
  });

  const [authReady, setAuthReady] = useState(false);

  // Carregar token salvo no primeiro render
  useEffect(() => {
    const token = localStorage.getItem("my-jwt");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setAuthState({ token, authenticated: true });
    } else {
      setAuthState({ token: null, authenticated: false });
    }
    setAuthReady(true); // ✅ finaliza carregamento
  }, []);

  const login = async (email: string, password: string, role: string) => {
    try {
      const result = await api.post(`/auth/login`, { email, password, role });
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

  const logout = async () => {
    localStorage.removeItem("my-jwt");
    delete axios.defaults.headers.common["Authorization"];
    setAuthState({ token: null, authenticated: false });
  };

  const value: AuthProps = {
    authState, //serve para ver o estado de autentiação e pegar seu token para acesso
    authReady, //serve para saber se meu usuario realmente esta pronto para navegar
    onLogin: login,
    onLogout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
