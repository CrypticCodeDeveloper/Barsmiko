
import { Navigate } from "react-router"
import { jwtDecode } from "jwt-decode"

const AuthProtecter = ({ children }) => {

    const token = localStorage.getItem("token")
    let decodedToken;

    if (token) {
        decodedToken = jwtDecode(token)
    }

    if (!token || !decodedToken) {
        return <Navigate to="/admin/login"></Navigate>
    }

  return (
    children
  )
}

export default AuthProtecter