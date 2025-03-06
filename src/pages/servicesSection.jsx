import { ArrowUpRight, X } from 'lucide-react';
import { useState } from 'react';
import { servicesContent } from '../data/servicesContent';

const ServicesSection = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getCardStyle = (index) => {
        const styles = [
            {
                wrapper: "bg-green-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 group",
                imageWrap: "h-40 rounded-t-lg overflow-hidden",
                content: "p-4"
            },
            {
                wrapper: "bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 group",
                imageWrap: "h-40 rounded-t-lg overflow-hidden",
                content: "p-4"
            },
            {
                wrapper: "bg-amber-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 group",
                imageWrap: "h-40 rounded-t-lg overflow-hidden",
                content: "p-4"
            },
            {
                wrapper: "bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-500 group",
                imageWrap: "h-40 rounded-t-lg overflow-hidden",
                content: "p-4"
            },
            {
                wrapper: "bg-green-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 group",
                imageWrap: "h-40 rounded-t-lg overflow-hidden",
                content: "p-4"
            },
            {
                wrapper: "bg-purple-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 group",
                imageWrap: "h-40 rounded-t-lg overflow-hidden",
                content: "p-4"
            }
        ];
        return styles[index];
    };

    const handleExploreClick = (service, e) => {
        e.stopPropagation();
        setSelectedService(service);
        setIsModalOpen(true);
    };

    return (
        <>
            <section className="w-full max-w-7xl mx-auto p-4 sm:p-6 bg-blue-50 rounded-lg">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 sm:mb-0">
                        {servicesContent.title}
                    </h2>
                    <div className="flex gap-2">
                        {servicesContent.icons.map(({ id, Icon }) => (
                            <div
                                key={id}
                                className="w-8 h-8 rounded-lg bg-white flex items-center justify-center"
                            >
                                <Icon className="w-4 h-4 text-gray-600" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {servicesContent.services.map((service, index) => {
                        const style = getCardStyle(index);
                        return (
                            <div
                                key={index}
                                className={`${style.wrapper} cursor-pointer transform transition-all duration-500`}
                                onClick={(e) => handleExploreClick(service, e)}
                                data-aos="fade-up" 
                                data-aos-delay={index * 100}
                                data-aos-duration="800"
                            >
                                <div className={style.imageWrap}>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className={style.content}>
                                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-1">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                        {service.description}
                                    </p>
                                    <button
                                        onClick={(e) => handleExploreClick(service, e)}
                                        className="text-sm text-gray-700 hover:text-gray-900 flex items-center gap-1"
                                    >
                                        Explore More
                                        <ArrowUpRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Modal with AOS animation */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                        aria-hidden="true"
                        onClick={() => setIsModalOpen(false)}
                    />
                    <div 
                        className="relative bg-white rounded-xl shadow-xl w-full max-w-3xl mx-auto my-8" 
                        style={{ maxHeight: 'calc(100vh - 100px)' }}
                        data-aos="zoom-in" 
                        data-aos-duration="400"
                    >
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute right-4 top-4 z-10 text-red-400 hover:text-red-500 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        {selectedService && (
                            <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 100px)' }}>
                                <div className="rounded-t-md overflow-hidden">
                                    <img
                                        src={selectedService.image}
                                        alt={selectedService.title}
                                        className="w-full object-cover"
                                        style={{ height: '200px' }}
                                    />
                                </div>
                                <div className="p-6 py-3 border-b border-gray-100">
                                    <h3 className="text-xl font-bold text-gray-900">
                                        {selectedService.title}
                                    </h3>
                                </div>
                                <div className="p-6 pt-0 pb-6 space-y-6">
                                    <div className="prose max-w-none">
                                        <p className="text-gray-600">
                                            {selectedService.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default ServicesSection;