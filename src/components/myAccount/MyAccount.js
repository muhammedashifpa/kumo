import { Outlet } from "react-router-dom";
import React from 'react'
import BreadCrumb from '../randomomponents/BreadCrumb'
import ProfileDashbord from '../myAccount/myAccountComponents/ProfileDashbord'
import { useState } from 'react'


function MyAccount() {
    return (
        <div>
            <BreadCrumb />
            <section className="middle">
				<div className="container">
					<div className="row justify-content-center justify-content-between">
                        <ProfileDashbord  />
                        <Outlet />
                    </div>
				</div>
			</section>            
        </div>
    )
}

export default MyAccount
