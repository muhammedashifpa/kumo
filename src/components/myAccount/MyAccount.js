import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import React from 'react'
import BreadCrumb from '../randomomponents/BreadCrumb'
import ProfileDashbord from '../myAccount/myAccountComponents/ProfileDashbord'
import MyOrder from "./myAccountComponents/MyOrder";
import Wishlist from './myAccountComponents/WishList'
import ProfileInfo from "./myAccountComponents/ProfileInfo";
import Address from './myAccountComponents/Address'
import AddAddress from "./myAccountComponents/AddAddress"


function MyAccount() {
    return (
        <div>
            <BreadCrumb />
            <section class="middle">
				<div class="container">
					<div class="row justify-content-center justify-content-between">
                        <ProfileDashbord />
                            {/* <MyOrder /> */}
                            {/* <Wishlist /> */}
                            {/* <ProfileInfo /> */}
                            {/* <Address /> */}
                            <AddAddress />

                    </div>
				</div>
			</section>            
        </div>
    )
}

export default MyAccount
