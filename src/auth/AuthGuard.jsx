import useAuth from '../hooks/useAuth'
import React, { useState, useEffect, useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
const AuthGuard = ({ children , ROLE}) => {   
    const { isAuthenticated, user } = useAuth()
    const [previouseRoute, setPreviousRoute] = useState(null)
    const { pathname } = useLocation()

    console.log(user)
    console.log(ROLE)
    const isUserRoleAuthenticated= user.roles.indexOf(ROLE) != -1;
    let authenticated = isAuthenticated && isUserRoleAuthenticated

    useEffect(() => {
        if (previouseRoute !== null) setPreviousRoute(pathname)
    }, [pathname, previouseRoute])
    console.log(authenticated)
    console.log(isAuthenticated)
    if (authenticated) return <>{children}</>
    else {
        return (
            <Navigate
                to="/personnel/login"
                state={{ redirectUrl: previouseRoute }}
            />
        )
    }
}

export default AuthGuard
