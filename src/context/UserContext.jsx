import { createContext, useEffect, useState } from "react";
import axios from 'axios'
export const UserContext = createContext();


const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    /* const [error, setError] = useState(null) */

    /*     const login = async (users) => {
            try {
                const response = await fetch("http://localhost:5000/api/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        ...users,
                    }),
                });
                const data = await response.json();
                alert(data?.error || "Autenticación exitosa!");
                localStorage.setItem("token", data.token);
            } catch (error) {
    
            }
        } */
    const login = async (email, password) => {
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", { email, password })
            const { token } = res.data
            setUser({ email })
            setToken(token)
        } catch (error) {

        }
    }
    const register = async (email, password) => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', { email, password })
            const { token } = res.data
            setUser({ email })
            setToken(token)
        } catch (error) {

        }
    }

    const carritoCheck = async (cart) => {
        try {
            const res = await axios.post('http://localhost:5000/api/checkout', {
                cart: carrito,
            })
            const { token } = res.data
            setUser({ cart })
            setToken(token)
        } catch (error) {

        }
    }

    useEffect(() => {
        token ? localStorage.setItem('token', token) : localStorage.removeItem('token')
    })

    const logout = () => {
        setToken(null)
        setUser(null)
        localStorage.removeItem('token')
    }

    const stateGlobal = {
        token,
        logout,
        register,
        login,
        user,
        carritoCheck
    }
    return (
        <UserContext.Provider value={stateGlobal}>
            {children}
        </UserContext.Provider>
    );
};
export default UserProvider;