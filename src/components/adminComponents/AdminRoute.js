import React from 'react'
import { Route, Navigate } from 'react-router-dom';
import {useSelector} from 'react-redux'

function AdminRoute({ children }) {
    const user = useSelector((state)=>state.user)
    return user.is_admin ?children  : <Navigate to="/accounts/login" />

}

export default AdminRoute
