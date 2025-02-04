import React, { createContext, useState, ReactNode } from "react";

// Definição do tipo do contexto
interface User {
  id: string;
  name: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

// Criar contexto com um valor inicial undefined
export const UserContext = createContext<UserContextType | undefined>(undefined);

// Criar o Provider
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Função para fazer login
  const login = (userData: User) => {
    setUser(userData);
  };

  // Função para fazer logout
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Criar um hook para facilitar o uso do contexto
export const useUser = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro de um UserProvider");
  }
  return context;
};