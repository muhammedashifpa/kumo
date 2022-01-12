import React from 'react'
import { Route, Navigate } from 'react-router-dom';
import {useSelector} from 'react-redux'



function PrivateRoute({ children }) {
    const user = useSelector((state)=>state.user)
    return user.auth ?children  : <Navigate to="/accounts/login" />
}

export default PrivateRoute
