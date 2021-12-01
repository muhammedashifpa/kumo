import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './App.css';
import {useState} from 'react'
import Modals from './components/Modals'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/home/Home'
import Category from './components/category/Category'
import ProductDetail from "./components/productdetails/ProductDetail";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import CompleateOrder from './components/compleateOrder/CompleteOrder';
import PageNotFound404 from './components/404/PageNotFound404'
import MyAccount from './components/myAccount/MyAccount'
import ProfileInfo from "./components/myAccount/myAccountComponents/ProfileInfo"
import MyOrder from "./components/myAccount/myAccountComponents/MyOrder"
import EditProfile from "./components/myAccount/myAccountComponents/EditProfile"
import Wishlist from "./components/myAccount/myAccountComponents/WishList"
import Address from "./components/myAccount/myAccountComponents/Address"
import AddAddress from "./components/myAccount/myAccountComponents/AddAddress"
import PaymentMethod from "./components/myAccount/myAccountComponents/PaymentMethod"
import AddCard from "./components/myAccount/myAccountComponents/AddCard"
import Login from "./components/account/Login";
import Register from "./components/account/Register"
import jwt_decode from "jwt-decode";




function App() {

    const initialData = Object.freeze({
        auth:false,
		user: null,
	});
    const [data, updateData] = useState(initialData);
    const authUpdate = () => {
        const token = localStorage.getItem('access_token')
        const IsAuthenticated = token ? true: false;
        console.log('updated')
        updateData({
            ...data,
           auth : IsAuthenticated,
           user : IsAuthenticated ? jwt_decode(token).user: null
           
        })

	};
    window.onload = ( () =>{
        authUpdate()
    });
  return (
      <div className="App">
        {/* <LogInModal authUpdate={authUpdate} /> */}
        <Router>
            <Routes>
                <Route path="/"  element={<Header authData={data}  headerClass="header-transparent" />} />
                <Route path="*"  element={<Header authData={data}  headerClass=""/>} />
                {/* <Route path="*"  element={<LogInModal authData={data} authUpdate={authUpdate}/> } /> */}
            </Routes>
            <Routes>
                <Route path="*" element={<PageNotFound404 />} />
                <Route path="/" element={<Home />} />
                <Route path="accounts" >
                    <Routes>
                        <Route path="" element={<Navigate replace to="login" />} />
                        <Route path="login" element={<Login authUpdate={authUpdate} />} />
                        <Route path="register" element={<Register />} />
                    </Routes>
                </Route>
                <Route path="category" element={<Category />} />
                <Route path="product" element={<ProductDetail />} />
                <Route path="cart" element={<Cart />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="order-complete" element={<CompleateOrder />} />
                <Route path="my-account"  element={<MyAccount authUpdate={authUpdate} />}>
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
            </Routes>
            <Footer/>
            <Modals authUpdate={authUpdate} />
        </Router>
      </div>
  );
}

export default App;
