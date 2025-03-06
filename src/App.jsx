// App.jsx
import routes from "@/routes";
import Navbar from "@/widgets/layout/navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CookieConsent from "./components/CookieConsent";
import AllServices from "./pages/allServices";
import ServicesLayout from "./pages/asanteDifference";
import CareersPage from "./pages/careers";
import ContactPage from "./pages/contact/contactHome";
import FAQPage from "./pages/faq";
import AboutUs from "./pages/servicesScreen";
import FeedbackButton from "./widgets/feedback/FeedbackButton";
import { Footer } from "./widgets/layout";

function App() {
  // Initialize AOS with optimized performance settings
  useEffect(() => {
    AOS.init({
      duration: 600, // Reduced from 800 for faster animations
      easing: 'ease-out',
      once: true, // Set to true for better performance (elements animate only once)
      mirror: false,
      offset: 80, // Reduced from 120 to trigger animations sooner
      delay: 0, // No base delay (individual elements can still have delays)
      throttleDelay: 50, // For better performance on scroll
      disable: 'mobile', // Disable on mobile devices for better performance
    });
  }, []);

  return (
    <>
      <Navbar routes={routes} />
      <main className="pt-16"> 
        <Routes>
          {routes.map(({ path, element }, key) =>
            element ? <Route key={key} exact path={path} element={element} /> : null
          )}
          <Route path="*" element={<Navigate to="/home" replace />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/services" element={<ServicesLayout/>} />
          <Route path="/all-services" element={<AllServices/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/careers" element={<CareersPage/>} />
          <Route path="/faq" element={<FAQPage/>} />
        </Routes>
      </main>
      <FeedbackButton/>
      <CookieConsent />
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default App;
