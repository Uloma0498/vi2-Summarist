import React, { createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    useEffect
  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;