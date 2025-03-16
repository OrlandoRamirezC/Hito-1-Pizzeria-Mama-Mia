//Ruta protegida alternativa, para no usar en main, sino en app directamente
import { Navigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import { useContext } from "react"


const ProtectedRoute = ({ children }) => {
  const { token } = useContext(UserContext)
  return (
    token ? children : <Navigate to='/login' />
  )
}

export default ProtectedRoute