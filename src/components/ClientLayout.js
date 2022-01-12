import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Snackbar from './randomomponents/Snackbar'
import ScrollToTop from './randomomponents/ScrollToTop'
import Modals from './Modals'
import { Routes, Route, Outlet } from "react-router-dom";

function ClientLayout() {
    return (
        <div>
            <ScrollToTop/>
            <Header/>
                <Outlet/>
            {/* <Snackbar/> */}
            <Footer/>
            <Modals/>
            
        </div>
    )
}

export default ClientLayout
