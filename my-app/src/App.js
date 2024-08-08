import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Product from "./pages/product/Product"
import Contact from "./pages/contact/Contact"
import Cart from "./pages/cart/cart"
import Detailpage from "./pages/detailpage/Detalpage"
import Navbar from "./component/navbar/Navbar"
import Footer from "./component/footer/Footer"
import Error from "./pages/error/Error"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/productdetail/:id' element={<Detailpage />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
