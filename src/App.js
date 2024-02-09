import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import About from "./pages/AboutUs";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import { ProductsProvider } from "./ProductsContext";
import { CartProvider } from "./CartContext";

// Styles start
import "./plugins/themefisher-font/style.css";
import "./plugins/bootstrap/css/bootstrap.min.css";
import "./plugins/animate/animate.css";
import "./plugins/slick/slick.css";
import "./plugins/slick/slick-theme.css";
import "./css/style.css";
import FaqPage from "./pages/FaqPage";
import ShopPage from "./pages/ShopPage";
import Page404 from "./pages/Page404";
import HomePage from "./pages/HomePage";
import ProductSingle from "./pages/ProductSingle";
import Cart from "./pages/Cart";
import Delivery from "./pages/Delivery";
// Styles end

class App extends React.Component {
  render() {
    return (
      <div className="name">
        <BrowserRouter>
        <Header />
        <NavigationBar />
        <ProductsProvider>
        <CartProvider>

        {/* <Router> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-as" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/404" element={<Page404 />} />
            <Route path="/product-single" element={<ProductSingle />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/delivery" element={<Delivery />} />
          </Routes>
        {/* </Router> */}
        </CartProvider>
        </ProductsProvider>
        <Footer />
        </BrowserRouter>
      </div>
    );
  }

  inputClick() {
    console.log("clicked");
  }
  mouseOver() {
    console.log("Mouse over");
  }
}
export default App;
