import React from 'react'
import MainDashbord from './MainDashbord'
import {Outlet} from 'react-router-dom'

function Dashbord() {
    return (
        <section className="middle">
        <div className="container">
            <div className="row justify-content-center justify-content-between">
                    <MainDashbord  />
                    <Outlet />
            </div>
        </div>
    </section> 
    )
}

export default Dashbord
