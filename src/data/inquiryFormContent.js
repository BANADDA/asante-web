// content/inquiryFormContent.js

export const inquiryFormContent = {
    stats: {
      number: "93K",
      title: "Satisfied Clients We",
      subtitle: "Served Globally",
      description1: "We offer customers reliable and regular collection of trash and materials, on a scheduled or call basis, with a safe and unique level of service for family.",
      description2: "Whatever the waste management needs, we've got a solution that will perfectly suit you.",
      ctaButton: "Get Started Now"
    },
    form: {
      title: "Send an Inquiry",
      subtitle: "Please complete the form below, and we'll be in touch. Or you can call us",
      phoneNumber: "+42 011 61145741",
      phoneText: "for immediate assistance!",
      submitButton: "Send Inquiry",
      fields: {
        serviceType: {
          label: "Service Type",
          placeholder: "Select service type",
          options: [
            "Waste Collection",
            "Recycling Services",
            "Hazardous Waste",
            "Commercial Waste"
          ]
        },
        businessType: {
          label: "Business Type",
          placeholder: "Select business type",
          options: [
            "Commercial",
            "Residential",
            "Industrial",
            "Municipal"
          ]
        },
        subject: {
          label: "Subject",
          placeholder: "What's your inquiry about?"
        },
        message: {
          label: "Message",
          placeholder: "Please describe your requirements..."
        },
        fullName: {
          label: "Full Name",
          placeholder: "Your full name"
        },
        companyName: {
          label: "Company Name",
          placeholder: "Your company name"
        },
        email: {
          label: "Email Address",
          placeholder: "your@email.com"
        },
        phone: {
          label: "Phone Number",
          placeholder: "Your phone number"
        }
      }
    }
  };