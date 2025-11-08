/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Success from "./pages/About/Success";
import Footer from "./Helper/Footer/Footer";
import Work from "./pages/About/Work";
import Softtech from "./pages/About/Softtech";
import UiDesign from "./pages/Services/UiDesign";
import Backend from "./pages/Services/Backend";
import CustomerSoftware from "./pages/Services/CustomerSoftware";
import SoftwareTest from "./pages/Services/SoftwareTest";
import OurProduct from "./pages/Product/OurProduct";
import SoftwareConsulting from "./pages/Services/SoftwareConsulting";
import Frontend from "./pages/Services/Frontend";
import Enterprise from "./pages/Services/Enterprise";
import OpenPositions from "./pages/About/OpenPositions";
import MobileApp from "./pages/Services/MobileApp";
import AndroidApp from "./pages/Services/AndroidApp";
import IosApp from "./pages/Services/IosApp";
import WebApp from "./pages/Services/WebApp";
import Odoo from "./pages/Services/Odoo";
import CyberSecurity from "./pages/Services/CyberSecurity";
import CloudServices from "./pages/Services/CloudServices";
import Industries from "./pages/Industries";
import About from "./pages/About/About";
import Blog from "./pages/About/Blog";
import FreshGrads from "./pages/About/FreshGrads";
import FollowCursor from "./Helper/FollowCursor";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* about */}
          <Route path="/about" element={<About />} />
          <Route path="/success" element={<Success />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/softtech" element={<Softtech />} />
          <Route path="/fresh" element={<FreshGrads />} />
          <Route path="/position" element={<OpenPositions />} />
          {/* Services */}
          <Route path="/ui" element={<UiDesign />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/customersoftware" element={<CustomerSoftware />} />
          <Route path="/softwaretest" element={<SoftwareTest />} />
          <Route path="/softwareconsulting" element={<SoftwareConsulting />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/androidapp" element={<AndroidApp />} />
          <Route path="/mobileapp" element={<MobileApp />} />
          <Route path="/iosapp" element={<IosApp />} />
          <Route path="/webapp" element={<WebApp />} />
          <Route path="/odoo" element={<Odoo />} />
          <Route path="/cyber" element={<CyberSecurity />} />
          <Route path="/cloud" element={<CloudServices />} />

          {/* Industries */}
          <Route path="/industrie" element={<Industries />} />
          {/* Our Product */}
          <Route path="/product" element={<OurProduct />} />
          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
      <Footer />

      {/* cursor */}
      <FollowCursor />
    </BrowserRouter>
  );
}
