import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';
import Modals from './components/Modals'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/home/Home'
import Shop from './components/shop/Shop'
import ProductDetail from "./components/productdetails/ProductDetail";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import CompleateOrder from './components/compleateOrder/CompleateOrder';
import PageNotFound404 from './components/404/PageNotFound404'
import MyAccount from './components/myAccount/MyAccount'

function App() {
  return (
      <div className="App">
        <Router>
          <Header/>
          <Routes>
            <Route path="*" element={<PageNotFound404 />} />
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-complete" element={<CompleateOrder />} />
            <Route path="/my-account" element={<MyAccount />} />
          </Routes>
          <Footer/>
          <Modals />
        </Router>
      </div>
  );
}

export default App;
