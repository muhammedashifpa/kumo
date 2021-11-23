import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import './App.css';
import Modals from './components/Modals'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/home/Home'
import Category from './components/category/Category'
import ProductDetail from "./components/productdetails/ProductDetail";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import CompleateOrder from './components/compleateOrder/CompleateOrder';
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

function App() {
  return (
      <div className="App">
        <Router>
            <Routes>
                <Route path="/"  element={<Header headerClass="header-transparent" />} />
                <Route path="*"  element={<Header headerClass=""/>} />
            </Routes>
            <Routes>
                <Route path="*" element={<PageNotFound404 />} />
                <Route path="/" element={<Home />} />
                <Route path="account" >
                    <Routes>
                        <Route path="" element={<Navigate replace to="login" />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </Routes>
                </Route>
                <Route path="category" element={<Category />} />
                <Route path="product" element={<ProductDetail />} />
                <Route path="cart" element={<Cart />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="order-complete" element={<CompleateOrder />} />
                <Route path="my-account"  element={<MyAccount />}>
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
            <Modals />
        </Router>
      </div>
  );
}

export default App;
