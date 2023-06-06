import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { Navigate } from 'react-router-dom'

export default function RequireAuth({children}) {

    const { user } = useContext(AuthContext)

    if (user.isAuthenticated){
        return children
    }
    return <Navigate to={'/login'} replace/>
}
