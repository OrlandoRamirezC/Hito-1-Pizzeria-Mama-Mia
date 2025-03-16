import { Routes, Route, Navigate } from "react-router-dom"
import { Home, LoginPage, Cart, Pizza, RegisterPage, NotFound, Profile } from '../pages/index'  //Barrels
import { UserContext } from "../context/UserContext"
import { useContext } from 'react'
/* import ProtectedRoute from "./components/ProtectedRoute" */
const AppRoutes = () => {
    const { token } = useContext(UserContext)
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={token ? <Navigate to='/' /> : <RegisterPage />} />
            <Route path='/login' element={token ? <Navigate to='/' /> : <LoginPage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/pizza/:id' element={<Pizza />} />
            {/* <Route path='/profile' element={<ProtectedRoute>  <Profile /> </ProtectedRoute>}/> */}
            <Route path='/profile' element={token ? <Profile /> : <Navigate to="/login" />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes