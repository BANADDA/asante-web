// App.jsx
import routes from "@/routes";
import Navbar from "@/widgets/layout/navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import AllServices from "./pages/allServices";
import ServicesLayout from "./pages/asanteDifference";
import AboutUs from "./pages/servicesScreen";
import FeedbackButton from "./widgets/feedback/FeedbackButton";
import { Footer } from "./widgets/layout";

function App() {
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
        </Routes>
      </main>
      <FeedbackButton/>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default App;
