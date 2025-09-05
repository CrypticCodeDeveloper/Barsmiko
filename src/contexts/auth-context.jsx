
import { createContext, useContext, useState, useEffect } from "react"
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {


    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {

        if (!token && localStorage.getItem("token")) {
            const access_token = localStorage.getItem("token");
            login(access_token);
        }

    }, [token])


    const login =  (token) => {
        const decodedToken = jwtDecode(token);

        console.log(decodedToken)

        setToken(token);
        localStorage.setItem("token", token);
        setUser(decodedToken)
    }

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setUser(null)
    }

  return (
    <AuthContext.Provider value={{
        login,
        logout,
        user,
    }} >
        {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {

    const data = useContext(AuthContext)

    return (
        data
    )
}

export default AuthProvider