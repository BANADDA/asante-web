// @/routes/index.js
import { Home } from "@/pages";

export const routes = [
  {
    name: "Home",
    path: "/",
    element: <Home />
  },
  {
    name: "About Us",
    path: "/about",
    // element: <AsanteDifference />
  },
  {
    name: "Services",
    path: "/services",
    // element: <Home />,
    // dropdownItems: [
    //   { name: "Our Services", path: "/services" },
    //   { name: "Pricing Plans", path: "/services" },
    //   { name: "Shop", path: "/services" }
    // ]
  },  {
    name: "Contact Us",
    path: "/contact-us",
    element: <Home />
  }
];

export default routes;