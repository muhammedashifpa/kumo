// import React from 'react'
import PaymentMethod from "./components/myAccount/myAccountComponents/PaymentMethod"
import ProfileInfo from "./components/myAccount/myAccountComponents/ProfileInfo"
import EditProfile from "./components/myAccount/myAccountComponents/EditProfile"
import AddAddress from "./components/myAccount/myAccountComponents/AddAddress"
import Wishlist from "./components/myAccount/myAccountComponents/WishList"
import MyOrder from "./components/myAccount/myAccountComponents/MyOrder"
import Address from "./components/myAccount/myAccountComponents/Address"
import AddCard from "./components/myAccount/myAccountComponents/AddCard"
import Favourite from "./components/favourite/Favourite"
import CompleateOrder from './components/compleateOrder/CompleteOrder';
import ProductDetail from "./components/productdetails/ProductDetail";
import PrivateRoute from "./components/randomomponents/PrivateRoute"
import PageNotFound404 from './components/404/PageNotFound404'
import GridItems from './components/category/GridItems'
import MyAccount from './components/myAccount/MyAccount'
import Checkout from "./components/checkout/Checkout";
import Category from './components/category/Category'
import Register from "./components/account/Register"
import Login from "./components/account/Login";
import Cart from "./components/cart/Cart";
import Home from './components/home/Home'
import ClientLayout from './components/ClientLayout'
//Admin Components
import AdminLayout from "./components/AdminLayout"
import AdminRoute from './components/adminComponents/AdminRoute'
import Dashboard from "./components/adminComponents/dashbord/Dashbord"
import OverView from './components/adminComponents/dashbord/OverView'
import Products from './components/adminComponents/dashbord/Products'
import Accounts from './components/adminComponents/dashbord/Accounts'
import AccountDetail from './components/adminComponents/dashbord/AccountDetail'
import Orders from './components/adminComponents/dashbord/Orders'
import AdminProducts from './components/adminComponents/products/AdminProducts'
import AdminUsers from './components/adminComponents/users/AdminUsers'
import AdminProductDetail from "./components/adminComponents/products/AdminProductDetail"
// import AdminProductDetailEdit from "./components/adminComponents/products/AdminProductDetailEdit"
import AdminUserDetail from "./components/adminComponents/users/AdminUserDetail"
import AdminUserDetailEdit from "./components/adminComponents/users/AdminUserDetailEdit"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import './App.css';

function App() {

  return (
      <div className="App">
          <Router>
            <Routes>
                <Route path="/" element={<ClientLayout/>}>
                    <Route path="*" element={<PageNotFound404 />} />
                    <Route index element={<Home />} />
                    <Route path="accounts" >
                        <Routes>
                            <Route path="" element={<Navigate replace to="login" />} />
                            <Route path="login" element={<Login />} />
                            <Route path="register" element={<Register />} />
                        </Routes>
                    </Route>
                    <Route path="category" >
                        <Routes>
                            <Route path=":slug" element={<GridItems/>}/>
                            <Route index element={<Category/>}/>
                        </Routes>
                    </Route>
                    <Route path="products" element={<GridItems />} />
                    <Route path="products/:slug" element={<GridItems />} />
                    <Route path="product/:slug" element={<ProductDetail />} />
                    <Route path="favourite" element={<PrivateRoute><Favourite /></PrivateRoute>} />
                    <Route path="cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
                    <Route path="checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
                    <Route path="order-complete" element={<PrivateRoute><CompleateOrder /></PrivateRoute>} />
                    <Route path="my-account"  element={<MyAccount/>}>
                        <Route path="" element={<Navigate replace to="my-profile" />} />
                        <Route path="my-profile" element={<ProfileInfo/>}/>
                        <Route path="my-profile/edit" element={<EditProfile/>}/>
                        <Route path="my-order" element={<MyOrder/>}/>
                        <Route path="wishlist" element={<Wishlist/>}/>
                        <Route path="addresses" element={<Address/>}/>
                        <Route path="addresses/add-address" element={<AddAddress/>}/>
                        <Route path="payment-methode" element={<PaymentMethod/>}/>
                        <Route path="payment-methode/add-card" element={<AddCard/>}/>
                    </Route>
                </Route>
                <Route path="admin" element={<AdminRoute><AdminLayout/></AdminRoute>}>
                    <Route path="*" element={<PageNotFound404 />} />
                    <Route path="" element={<Navigate replace to="dashbord" />} />
                    <Route path='dashbord' element={<Dashboard/>}>
                        <Route path="" element={<Navigate replace to="overview" />} />
                        <Route  path='overview' element={<OverView/>}/>
                        <Route path='orders' element={<Orders/>}/>
                        <Route path='accounts' element={<Accounts/>}/>
                        <Route path='accounts/:slug' element={<AccountDetail/>}/>
                        <Route path='products' element={<Products/>}/>
                    </Route>
                    <Route path="users" element={<AdminUsers/>} />
                    <Route path="users/:slug" element={<AdminUserDetail/>}/>
                    <Route path="users/:slug/edit" element={<AdminUserDetailEdit/>}/>
                    <Route path="products" element={<AdminProducts/>}/>
                    <Route path="products/:slug" element={<AdminProductDetail/>}/>
                </Route>
            </Routes>
        </Router>
      </div>
  );
}

export default App;
