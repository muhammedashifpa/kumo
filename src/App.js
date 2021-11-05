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


function App() {
  return (
      <div className="App">
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
          <Footer/>
          <Modals />
        </Router>
      </div>
  );
}

export default App;
