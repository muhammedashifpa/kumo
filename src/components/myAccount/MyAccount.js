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
import PaymentMethods from"./myAccountComponents/PaymentMethods"
import PaymentAddCard from './myAccountComponents/PaymentAddCard'
import Login from './myAccountComponents/Login'
import CreateAccount from './myAccountComponents/CreateAccount'


function MyAccount() {
    return (
        <div>
            <BreadCrumb />
            <section class="middle">
				<div class="container">
					<div class="row justify-content-center justify-content-between">
                        <ProfileDashbord />
                        <MyOrder />
                        {/* <Wishlist /> */}
                        {/* <ProfileInfo /> */}
                        {/* <Address /> */}
                        {/* <AddAddress /> */}
                        {/* <PaymentMethods /> */}
                        {/* <PaymentAddCard /> */}
                        {/* <Login /> */}
                        {/* <CreateAccount /> */}
                    </div>
				</div>
			</section>            
        </div>
    )
}

export default MyAccount
