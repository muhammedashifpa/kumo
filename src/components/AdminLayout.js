import React from 'react'
import Header from './adminComponents/Header'
import { Routes, Route, Outlet } from "react-router-dom";


function AdminLayout() {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

export default AdminLayout
