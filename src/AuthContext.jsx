import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [nombre, setNombre] = useState("");
  const [contra, setContra] = useState("");

  return (
    <AuthContext.Provider value={{ nombre, setNombre, contra, setContra }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}