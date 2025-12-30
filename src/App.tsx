import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import ContactUs from "./pages/ContactUs";
import { Toaster } from "react-hot-toast";
import StoreLayout from "./components/Dashboard";

function App() {
  return (
    <>
      <StoreLayout>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/about" element={<div className="info-page"><h1>عن المتجر</h1><p>متجر UNSTORE هو وجهتكم المفضلة لأحدث المنتجات.</p></div>} />
        </Routes>
        <Toaster position="top-center" />
      </StoreLayout>
    </>
  );
}

export default App;
