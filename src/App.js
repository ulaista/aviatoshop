import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import About from "./pages/AboutUs";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";

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
// Styles end

class App extends React.Component {
  render() {
    return (
      <div className="name">
        <Header />
        <NavigationBar />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-as" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/404" element={<Page404 />} />
            <Route path="/product-single" element={<ProductSingle />} />
          </Routes>
        </Router>

        <Footer />
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
