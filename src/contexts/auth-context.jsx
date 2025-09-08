
import { createContext, useContext, useState, useEffect } from "react"
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      try {
        return jwtDecode(storedToken);
      } catch {
        return null;
      }
    }
    return null;
  });

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
        localStorage.setItem("token", token);
      } catch {
        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
      }
    } else {
      setUser(null);
      localStorage.removeItem("token");
    }
  }, [token]);

  const login = (newToken) => {
    setToken(newToken);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    window.location.href = "/admin/login"
  };

  return (
    <AuthContext.Provider value={{
      login,
      logout,
      user,
      token,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {

    const data = useContext(AuthContext)

    return (
        data
    )
}

export default AuthProvider