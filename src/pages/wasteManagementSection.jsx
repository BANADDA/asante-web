import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import { Building2, Globe, Phone } from "lucide-react";
import { useEffect, useRef, useState } from 'react';
import { wasteManagementContent } from '../data/wasteManagement';

const WasteManagementSection = () => {
    const { stats, mainContent, contactCard, coverageCard } = wasteManagementContent;
    const [visibleElements, setVisibleElements] = useState({
        stats: false,
        mainContent: false,
        contactCard: false,
        coverageCard: false
    });

    const statsRef = useRef(null);
    const mainContentRef = useRef(null);
    const contactCardRef = useRef(null);
    const coverageCardRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const handleIntersection = (entries, elementKey) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setVisibleElements(prev => ({
                            ...prev,
                            [elementKey]: true
                        }));
                    }, {
                        stats: 0,
                        mainContent: 200,
                        contactCard: 400,
                        coverageCard: 200
                    }[elementKey]);
                }
            });
        };

        const observers = [
            { ref: statsRef, key: 'stats' },
            { ref: mainContentRef, key: 'mainContent' },
            { ref: contactCardRef, key: 'contactCard' },
            { ref: coverageCardRef, key: 'coverageCard' }
        ].map(({ ref, key }) => {
            const observer = new IntersectionObserver(
                (entries) => handleIntersection(entries, key),
                observerOptions
            );
            if (ref.current) observer.observe(ref.current);
            return observer;
        });

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, []);

    return (
        <>
            <section className="bg-green-50/50 w-full">
                <div className="max-w-7xl mx-auto p-4 sm:p-6">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
                            <div className="lg:pr-6 xl:pr-12">
                                {/* Stats Container */}
                                <div 
                                    ref={statsRef}
                                    className={`mb-8 sm:mb-12 flex flex-col sm:flex-row gap-6 sm:gap-12 transform transition-all duration-700
                                        ${visibleElements.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                >
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div className="bg-amber-50/50 p-2 sm:p-3 rounded-lg">
                                            <Building2 size={32} className="text-amber-400 sm:w-10 sm:h-10" />
                                        </div>
                                        <div>
                                            <Typography variant="h4" className="font-bold text-xl sm:text-2xl lg:text-[2rem] text-[#235e8b]">
                                                {stats.employees.number}
                                            </Typography>
                                            <Typography className="text-gray-600 text-xs sm:text-sm leading-tight">
                                                {stats.employees.text}<br />{stats.employees.subtext}
                                            </Typography>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div className="bg-yellow-50/50 p-2 sm:p-3 rounded-lg">
                                            <Globe size={32} className="text-amber-400 sm:w-10 sm:h-10" />
                                        </div>
                                        <div>
                                            <Typography variant="h4" className="font-bold text-xl sm:text-2xl lg:text-[2rem] text-[#235e8b]">
                                                {stats.coverage.number}
                                            </Typography>
                                            <Typography className="text-gray-600 text-xs sm:text-sm leading-tight">
                                                {stats.coverage.text}<br />{stats.coverage.subtext}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>

                                <div 
                                    ref={mainContentRef}
                                    className={`transform transition-all duration-700 delay-200
                                        ${visibleElements.mainContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                >
                                    <Typography variant="h3" className="mb-4 sm:mb-6 font-bold text-xl sm:text-2xl lg:text-[2rem] text-[#235e8b]">
                                        {mainContent.title}
                                    </Typography>

                                    <Typography className="mb-6 sm:mb-8 font-normal text-sm sm:text-base text-gray-600 leading-relaxed">
                                        {mainContent.description}
                                    </Typography>
                                </div>

                                {/* Contact Card */}
                                <div
                                    ref={contactCardRef}
                                    className={`transform transition-all duration-700 delay-400
                                        ${visibleElements.contactCard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                >
                                    <Card className="w-full sm:max-w-md shadow-lg rounded-xl bg-white mb-8 lg:mb-0">
                                        <CardBody className="p-4 sm:p-6">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="relative p-2 sm:p-3">
                                                    <div className="absolute -right-1 -bottom-1">
                                                        <div className="bg-green-500 rounded-full p-1.5 sm:p-2">
                                                            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <Typography className="text-gray-600 text-sm sm:text-base mb-4">
                                                {contactCard.description}
                                            </Typography>
                                            <Button
                                                variant="text"
                                                className="flex items-center gap-2 p-0 hover:bg-transparent text-[#235e8b] text-sm sm:text-base group"
                                            >
                                                {contactCard.buttonText}
                                                <svg
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    className="sm:w-4 sm:h-4 transition-transform duration-300 group-hover:-translate-y-1"
                                                >
                                                    <path
                                                        d="M7 17l9.2-9.2M17 17V8h-9"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>

                            <div 
                                ref={coverageCardRef}
                                className={`lg:pl-6 xl:pl-12 transform transition-all duration-700
                                    ${visibleElements.coverageCard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            >
                                <Card className="shadow-lg border shadow-gray-500/10 rounded-xl overflow-hidden">
                                    <CardHeader floated={false} className="relative h-48 sm:h-56 m-0 p-0 rounded-none">
                                        <img
                                            src="/img/waste-4.jpg"
                                            alt="Waste Management Service"
                                            className="h-full w-full object-cover"
                                        />
                                    </CardHeader>
                                    <CardBody className="p-4 sm:p-6">
                                        <Typography variant="small" className="font-normal text-xs sm:text-sm text-gray-600">
                                            {coverageCard.label}
                                        </Typography>
                                        <Typography variant="h5" className="mb-2 sm:mb-3 mt-1 sm:mt-2 font-bold text-base sm:text-lg text-[#235e8b]">
                                            {coverageCard.title}
                                        </Typography>
                                        <Typography className="font-normal text-gray-600 text-sm sm:text-base">
                                            {coverageCard.description}
                                        </Typography>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WasteManagementSection;