import { Outlet,Navigate } from "react-router-dom";
import React from 'react'
import BreadCrumb from '../randomomponents/BreadCrumb'
import ProfileDashbord from '../myAccount/myAccountComponents/ProfileDashbord'
import {useSelector} from 'react-redux'



function MyAccount(props) {
    const user = useSelector((state)=>state.user)
    return user.auth ? (
        <div>
            <section className="middle">
				<div className="container">
					<div className="row justify-content-center justify-content-between">
                        <ProfileDashbord  />
                        <Outlet />
                    </div>
				</div>
			</section>            
        </div>
    ) :(
        <Navigate to='/accounts/login'/>
    )
}

export default MyAccount
