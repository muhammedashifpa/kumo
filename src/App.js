import PaymentMethod from "./components/myAccount/myAccountComponents/PaymentMethod"
import ProfileInfo from "./components/myAccount/myAccountComponents/ProfileInfo"
import EditProfile from "./components/myAccount/myAccountComponents/EditProfile"
import AddAddress from "./components/myAccount/myAccountComponents/AddAddress"
import Wishlist from "./components/myAccount/myAccountComponents/WishList"
import MyOrder from "./components/myAccount/myAccountComponents/MyOrder"
import Address from "./components/myAccount/myAccountComponents/Address"
import AddCard from "./components/myAccount/myAccountComponents/AddCard"
import CompleateOrder from './components/compleateOrder/CompleteOrder';
import ProductDetail from "./components/productdetails/ProductDetail";
import PrivateRoute from "./components/randomomponents/PrivateRoute"
import ScrollToTop from "./components/randomomponents/ScrollToTop";
import PageNotFound404 from './components/404/PageNotFound404'
import MyAccount from './components/myAccount/MyAccount'
import Checkout from "./components/checkout/Checkout";
import Category from './components/category/Category'
import Register from "./components/account/Register"
import Login from "./components/account/Login";
import Cart from "./components/cart/Cart";
import Home from './components/home/Home'
import Modals from './components/Modals'
import Header from './components/Header'
import Footer from './components/Footer'
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
            <ScrollToTop/>
            <Routes>
                <Route path="/"  element={<Header   headerClass="header-transparent" />} />
                <Route path="*"  element={<Header   headerClass=""/>} />
            </Routes>
            <Routes>
                <Route path="*" element={<PageNotFound404 />} />
                <Route path="/" element={<Home />} />
                <Route path="accounts" >
                    <Routes>
                        <Route path="" element={<Navigate replace to="login" />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </Routes>
                </Route>
                <Route path="category" element={<Category />} />
                <Route path="product/:slug" element={<ProductDetail />} />
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
            </Routes>
            <Footer/>
            <Modals/>
        </Router>
      </div>
  );
}

export default App;
