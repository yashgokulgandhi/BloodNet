import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/donor/Home";
import ServicePage from "./components/donor/service/ServicePage";
import ProductPage from "./components/donor/product/Productpage";
import ContactPage from "./components/donor/contact/contactPage";
import LoginPage from "./components/donor/login";
import RegisterPage from "./components/donor/register";
import WelcomePage from "./components/donor/welcome";
import HomeofHospital from './components/hospital/Home/Home';
import LoginHospital from './components/hospital/login';
import RegisterHospital from './components/hospital/register';
import Layout from "./Layout";
import CommonPage from "./components/commonPage/commonHome";
import CheckEligibility from "./components/donor/check/check";
import Notification from "./components/donor/Notification/Notification";
import BloodRequestPage from "./components/hospital/bloodRequest/bloodRequest";
import Contact from "./components/hospital/contact/contact";
import LayoutHospital from "./LayoutHospital";
import ProtectedRoute from "./protectedRoute"; // Import the ProtectedRoute component

function App() {
  return (
    <Router>
      <Routes>
        {/* Common Page accessible to everyone */}
        <Route path="/" element={<CommonPage />} />

        {/* Donor Routes */}
        <Route element={<ProtectedRoute role="donor" redirectPath="/donor/login" />}>
          <Route element={<Layout />}>
            <Route path="/donor/home" element={<HomePage />} />
            <Route path="/donor/service" element={<ServicePage />} />
            <Route path="/donor/product" element={<ProductPage />} />
            <Route path="/donor/contact" element={<ContactPage />} />
            <Route path="/donor/welcome" element={<WelcomePage />} />
            <Route path="/donor/check" element={<CheckEligibility />} />
            <Route path="/donor/notification" element={<Notification />} />
          </Route>
        </Route>

        {/* Hospital Routes */}
        <Route element={<ProtectedRoute role="hospital" redirectPath="/hospital/login" />}>
          <Route element={<LayoutHospital />}>
            <Route path="/hospital/home" element={<HomeofHospital />} />
            <Route path="/hospital/bloodrequest" element={<BloodRequestPage />} />
            <Route path="/hospital/contact" element={<Contact />} />
          </Route>
        </Route>

        {/* Login and Registration Pages (accessible to everyone) */}
        <Route path="/donor/login" element={<LoginPage />} />
        <Route path="/donor/register" element={<RegisterPage />} />
        <Route path="/hospital/login" element={<LoginHospital />} />
        <Route path="/hospital/register" element={<RegisterHospital />} />
      </Routes>
    </Router>
  );
}

export default App;