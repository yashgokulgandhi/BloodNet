import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";
import ServicePage from "./components/service/ServicePage";
import ProductPage from "./components/product/Productpage";
import ContactPage from "./components/contact/contactPage";
import LoginPage from "./components/login";
import RegisterPage from "./components/register";
import WelcomePage from "./components/welcome";
import HomeofHospital from './components/hospital/Home/Home';
import LoginHospital from './components/hospital/login';
import RegisterHospital from './components/hospital/register';
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
        </Route>
        <Route path="/hospital/home" element={<HomeofHospital />} />
        <Route path="/hospital/login" element={<LoginHospital />} />
        <Route path="/hospital/register" element={<RegisterHospital />} />
      </Routes>
    </Router>
  );
}

export default App;
