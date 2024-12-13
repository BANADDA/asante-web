import {
    HardHat,
    Radio,
    Recycle,
    Stethoscope,
    Tent,
    Trash2
} from "lucide-react";

export const servicesContent = {
    title: "OUR SERVICES",
    introduction: {
        text: "We offer a full range of waste management services to both public & private clients across categories such as Hazardous Waste, Domestic Waste, Medical Waste and Pharmaceutical, Cesspool, E-Waste as well as Oil and Gas Waste."
    },
    services: [
        {
            title: "Refuse Collection Services",
            description: "We provide well-organized and responsive refuse collection services to all types of residents, commercial & industrial clients. By working with our Local Authority partners, we have established customized household waste collection operations, which meet and exceed our clients' expectations.",
            image: "/img/refuse-collection.jpg"
        },
        {
            title: "Construction & Demolition Waste Solution",
            description: "From design to construction, we help contractors and builders – and their customers – achieve their green-building and sustainability goals. Our construction waste disposal offers full-service waste disposal solutions, specializing in roll-off container rental services.",
            image: "/img/construction-waste.jpg"
        },
        {
            title: "WEEE Recycling & Collection Services",
            description: "Our Waste Electrical and Electronic Equipment (WEEE) collection service is a simple, effective and proven way to achieve high recycling rates for your old IT equipment. We can tailor our WEEE solutions by including packaging & WEEE recycling to ensure you are compliant with the legislation no matter the size/type of your E-Waste.",
            image: "/img/weee-recycling.jpg"
        },
        {
            title: "Confidential Waste Shredding & Secure Destruction",
            description: "With the rise in identity and document theft, information presents a serious security risk if it were to fall into the wrong hands. From bank statements to out of date products, private records and contracts, we can provide a safe and secure product recycling or destruction service.",
            image: "/img/secure-shredding.jpg"
        },
        {
            title: "Environment & Waste Management Consultation",
            description: "Our environmental consultancy was established to provide a practical, knowledgeable, and good value service to small and medium sized organisations & esteemed Clients. Our waste management consultants develop a waste management plan tailored to your business. This has enabled us to produce high quality documents, procedures and systems that demonstrate realistic, succinct and practical measures.",
            image: "/img/environmental-consulting.webp"
        },
        {
            title: "Cesspool & Drain Cleaning",
            description: "Sewage spills are unpleasant and can cause vast disruption to your business or home. Our nationwide 24/7 rapid, responsive services use the latest technology to clean drains, interceptors and separators using specialist jetting equipment and vacuum tankers. Our highly trained staffs are available for routine clearance of such damage.",
            image: "/img/drain-cleaning.jpg"
        }
    ],
    icons: [
        { id: "recycle", Icon: Recycle },
        { id: "bin", Icon: Trash2 },
        { id: "event", Icon: Tent },
        { id: "hazard", Icon: Radio },
        { id: "construction", Icon: HardHat },
        { id: "medical", Icon: Stethoscope }
    ]
};