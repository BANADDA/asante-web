// src/data/footerContent.js

const year = new Date().getFullYear();

export const footerContent = {
  title: "Asante Waste Management",
  description: "We recognize that the right service for home is the most important choice. Asante can provide the waste collection you need for your home, with trusted service.",
  
  officeInfo: {
    title: "London Office",
    address: "The Great Kings Building Management 2307\nBeverley Road, Brooklyn, NY 14784",
    email: "info@asantewaste.com",
    phone: "+2 0116114574l",
    coordinates: [40.7128, -74.0060], // New York coordinates
    buttonText: "Send Request"
  },
  
  newsletter: {
    title: "Sign Up For Industry Alerts, Deals,",
    subtitle: "News And Insights From Us.",
    placeholder: "Your Email Address",
    buttonText: "Subscribe"
  },
  
  socials: [
    {
      color: "white",
      name: "facebook",
      path: "#"
    },
    {
      color: "white",
      name: "twitter",
      path: "#"
    },
    {
      color: "white",
      name: "linkedin",
      path: "#"
    }
  ],
  
  menus: [
    {
      name: "Company",
      items: [
        { name: "About Us", path: "#" },
        { name: "Sustainability", path: "#" },
        { name: "Leadership Team", path: "#" },
        { name: "News & Media", path: "#" },
        { name: "Careers", path: "#" }
      ]
    },
      {
        "name": "Services",
        "items": [
          { "name": "Residential Waste", "path": "#" },
          { "name": "Commercial Waste", "path": "#" },
          { "name": "Retail And Institutional", "path": "#" },
          { "name": "Commercial Liquid", "path": "#" },
          { "name": "E Waste Management", "path": "#" },
          { "name": "Oil and Gas", "path": "#" }
        ]
      },    
    {
      name: "Industries",
      items: [
        { name: "Manufacturing Facilities", path: "#" },
        { name: "Educational Facilities", path: "#" },
        { name: "Medical Facilities", path: "#" },
        { name: "Construction Facilities", path: "#" },
        { name: "Hospitality Facilities", path: "#" },
        { name: "Retail Facilities", path: "#" }
      ]
    }
  ],
  
  quickContact: {
    title: "Quick Contact",
    description: "If you have any questions or need help, feel free to contact with our team.",
    email: "info@asantewaste.com",
    phone: "+2 0116114574l",
    address: "2307 Beverley Rd Brooklyn, New York 11226 United States"
  },
  
  copyright: `Copyright © ${year} Asante Waste Management by Asante Devs.`
};