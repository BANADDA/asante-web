// @/routes/index.js
import { Home } from "@/pages";

export const routes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
    // dropdownItems: [
    //   // { name: "Homepage 1", path: "/home-1" },
    //   // { name: "Homepage 2", path: "/home-2" }
    // ]
  },
  {
    name: "Company",
    path: "/company",
    element: <Home />,
    dropdownItems: [
      { name: "About Us", path: "/about" },
      { name: "Our Team", path: "/team" },
      { name: "FAQ", path: "/faq" },
      { name: "Contact", path: "/contact" }
    ]
  },
  {
    name: "Services",
    path: "/services",
    element: <Home />,
    dropdownItems: [
      { name: "Service List", path: "/services-list" },
      { name: "Service Details", path: "/service-details" }
    ]
  },
  {
    name: "Pricing",
    path: "/pricing",
    element: <Home />,
    dropdownItems: [
      { name: "Pricing Plans", path: "/pricing-plans" },
      { name: "Pricing Calculator", path: "/pricing-calculator" }
    ]
  },
  // {
  //   name: "News",
  //   path: "/news",
  //   element: <Home />,
  //   dropdownItems: [
  //     { name: "News Grid", path: "/news-grid" },
  //     { name: "News Details", path: "/news-details" }
  //   ]
  // },
  {
    name: "Shop",
    path: "/shop",
    element: <Home />,
    dropdownItems: [
      { name: "Products", path: "/products" },
      { name: "Shopping Cart", path: "/cart" },
      { name: "Checkout", path: "/checkout" }
    ]
  }
];

export default routes;