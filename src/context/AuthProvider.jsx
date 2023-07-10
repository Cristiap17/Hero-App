import React, { useState, createContext } from 'react'

export const AuthContext = createContext({});

export default function AuthProvider({children}) {
  const [user , setUser] = useState({name: '', email: '', isAuthenticated: false});
  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
    )
}
 