import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import Details  from "./pages/Details"
import QuotationForm from "./components/quotation/QuotationForm";
import ProductCategories  from "./components/Products/ProductsCategories"
import { Register } from "./pages/auth/Register";
import { Login } from "./pages/auth/Login";
import ViewProduct from "./components/Products/ViewProduct"
function App() {
  return (
    <div style={{backgroundColor:"#f5f9fc", minHeight:"100%"}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Menu />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/details/:id" element={<Details  />} />
          <Route path="/product/:id" element={<ViewProduct />} />
          <Route path="/get-quotation" element={<QuotationForm  />} />
          <Route path="/our-products" element={<ProductCategories  />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
