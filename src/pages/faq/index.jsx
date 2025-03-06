import { ChevronDown, ChevronUp, Mail, Phone, PlusCircle, Search } from 'lucide-react';
import { useState } from 'react';

// Sample FAQ data - in a real app, this would come from an API or CMS
const faqData = [
  {
    category: "General",
    items: [
      {
        id: 1,
        question: "What services does Asante Waste Management offer?",
        answer: "Asante Waste Management offers comprehensive waste management solutions, including residential and commercial waste collection, recycling services, industrial waste management, landfill management, waste-to-energy solutions, and environmental consulting services. We tailor our services to meet the specific needs of each client while maintaining the highest environmental standards."
      },
      {
        id: 2,
        question: "What areas do you service in Uganda?",
        answer: "We currently provide waste management services across major urban centers in Uganda, with a focus on Kampala and surrounding areas. Our service coverage includes Kampala, Entebbe, Jinja, Mukono, and other nearby municipalities. We are continually expanding our reach to serve more communities throughout Uganda."
      },
      {
        id: 3,
        question: "How can I request a service quote?",
        answer: "You can request a service quote by filling out the contact form on our website, calling our customer service line at +256 414 691 868, or sending an email to info@asantewm.com. Our team will respond within 24 hours with a customized quote based on your specific waste management needs."
      }
    ]
  },
  {
    category: "Residential Services",
    items: [
      {
        id: 4,
        question: "How often is residential waste collected?",
        answer: "Our standard residential waste collection schedule is once per week, but we offer flexible collection frequencies based on your household needs. We also provide twice-weekly and bi-weekly options. You can choose the collection schedule that works best for your family when you sign up for our services."
      },
      {
        id: 5,
        question: "What items are acceptable for recycling collection?",
        answer: "Our recycling program accepts paper, cardboard, glass bottles and jars, plastic containers (types 1-7), aluminum cans, and steel/tin cans. We do not accept plastic bags, Styrofoam, electronics, hazardous waste, or food-contaminated items in recycling bins. Please ensure all recyclable items are clean and dry before placing them in your recycling bin."
      },
      {
        id: 6,
        question: "How do I sign up for residential waste collection service?",
        answer: "Signing up for our residential waste collection service is easy! You can register online through our website, call our customer service team at +256 414 691 868, or visit our office in person. We'll help you select the right service plan for your needs and schedule your first collection within 3-5 business days."
      }
    ]
  },
  {
    category: "Commercial Services",
    items: [
      {
        id: 7,
        question: "What types of commercial waste do you handle?",
        answer: "We handle a wide range of commercial waste, including general office waste, retail waste, restaurant and food service waste, construction and demolition debris, and specialized industrial waste. Our team works with businesses to develop customized waste management plans that comply with all local regulations while maximizing recycling and minimizing environmental impact."
      },
      {
        id: 8,
        question: "Can you provide waste management for special events?",
        answer: "Yes, we offer special event waste management services for conferences, festivals, sporting events, and other large gatherings. Our event services include strategic placement of waste and recycling bins, regular collection throughout the event, and final cleanup. We can also provide recycling education materials and stations to help minimize the environmental footprint of your event."
      },
      {
        id: 9,
        question: "Do you offer commercial recycling programs?",
        answer: "Yes, we offer comprehensive commercial recycling programs tailored to your business needs. Our commercial recycling services include cardboard recycling, paper recycling, plastic and glass collection, and specialized materials recycling depending on your industry. We also provide waste audits to help identify additional recycling opportunities and potential cost savings."
      }
    ]
  },
  {
    category: "Billing & Payments",
    items: [
      {
        id: 10,
        question: "What payment methods do you accept?",
        answer: "We accept multiple payment methods for your convenience, including mobile money (MTN Mobile Money and Airtel Money), credit/debit cards, bank transfers, and cash payments at our office. We also offer automatic payment options for recurring services to ensure uninterrupted waste collection."
      },
      {
        id: 11,
        question: "How often will I be billed for services?",
        answer: "Billing frequency depends on your service plan. Residential customers are typically billed monthly or quarterly, while commercial clients may choose monthly, quarterly, or annual billing cycles based on their preferences. All invoices are sent electronically unless you request paper invoices."
      },
      {
        id: 12,
        question: "Are there any additional fees I should be aware of?",
        answer: "Our service quotes include all standard collection fees. Additional fees may apply for excess waste beyond your contracted bin volume, special waste handling (like bulky items or hazardous materials), late payments, or service changes requested outside normal scheduling windows. All potential additional fees are clearly outlined in your service agreement."
      }
    ]
  },
  {
    category: "Environmental Initiatives",
    items: [
      {
        id: 13,
        question: "What environmental initiatives does Asante Waste Management support?",
        answer: "Asante Waste Management is committed to environmental sustainability through various initiatives, including community cleanup events, environmental education programs in schools, tree planting projects, and partnerships with local environmental organizations. We also continuously invest in green technologies to minimize the environmental impact of our operations."
      },
      {
        id: 14,
        question: "How do you ensure environmentally responsible waste disposal?",
        answer: "We adhere to strict environmental standards in all our operations. This includes proper waste segregation, maximizing recycling and resource recovery, responsible landfill management, and compliance with all environmental regulations. We regularly audit our processes to identify opportunities for improvement and implement best practices in sustainable waste management."
      },
      {
        id: 15,
        question: "Does Asante offer waste reduction consulting for businesses?",
        answer: "Yes, we offer waste reduction consulting services to help businesses minimize their waste generation. Our environmental experts can conduct waste audits, recommend process improvements, implement recycling programs, and develop comprehensive waste reduction strategies. These services help our clients reduce their environmental footprint while often reducing waste management costs."
      }
    ]
  }
];

const FAQPage = () => {
  const [expandedItems, setExpandedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Toggle FAQ item expand/collapse
  const toggleItem = (itemId) => {
    if (expandedItems.includes(itemId)) {
      setExpandedItems(expandedItems.filter(id => id !== itemId));
    } else {
      setExpandedItems([...expandedItems, itemId]);
    }
  };
  
  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setShowSearchResults(false);
      return;
    }
    
    // Search through all FAQ items
    const results = [];
    faqData.forEach(category => {
      category.items.forEach(item => {
        if (
          item.question.toLowerCase().includes(query.toLowerCase()) ||
          item.answer.toLowerCase().includes(query.toLowerCase())
        ) {
          results.push(item);
        }
      });
    });
    
    setSearchResults(results);
    setShowSearchResults(true);
  };
  
  // Filter FAQ items by category
  const getFilteredFAQs = () => {
    if (activeCategory === 'all') {
      return faqData;
    }
    return faqData.filter(category => category.category === activeCategory);
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-green-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl opacity-90 mb-8">
              Find answers to common questions about our waste management services
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mt-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-white opacity-70" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search for answers..."
                className="pl-10 pr-4 py-3 w-full bg-white/20 border border-white/30 rounded-full text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Search Results */}
        {showSearchResults && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Search Results {searchResults.length > 0 ? `(${searchResults.length})` : ''}
            </h2>
            
            {searchResults.length > 0 ? (
              <div className="space-y-4">
                {searchResults.map(item => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div
                      className={`p-5 cursor-pointer flex justify-between items-start ${
                        expandedItems.includes(item.id) ? 'bg-blue-50' : ''
                      }`}
                      onClick={() => toggleItem(item.id)}
                    >
                      <h3 className="text-lg font-medium pr-8 text-gray-800">{item.question}</h3>
                      <span className="text-blue-600 flex-shrink-0 mt-1">
                        {expandedItems.includes(item.id) ? (
                          <ChevronUp size={20} />
                        ) : (
                          <ChevronDown size={20} />
                        )}
                      </span>
                    </div>
                    
                    {expandedItems.includes(item.id) && (
                      <div className="p-5 bg-blue-50 border-t border-blue-100">
                        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 bg-gray-50 rounded-lg">
                <p className="text-gray-500 mb-4">No results found for "{searchQuery}"</p>
                <p className="text-sm text-gray-500">
                  Try using different keywords or browse the categories below
                </p>
              </div>
            )}
          </div>
        )}
        
        {/* Category Tabs */}
        {!showSearchResults && (
          <div className="mb-10 overflow-x-auto">
            <div className="flex space-x-2 min-w-max pb-2">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory('all')}
              >
                All Categories
              </button>
              
              {faqData.map(category => (
                <button
                  key={category.category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category.category)}
                >
                  {category.category}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* FAQ Accordion */}
        {!showSearchResults && getFilteredFAQs().map(category => (
          <div key={category.category} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">{category.category}</h2>
            
            <div className="space-y-4">
              {category.items.map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div
                    className={`p-5 cursor-pointer flex justify-between items-start ${
                      expandedItems.includes(item.id) ? 'bg-blue-50' : ''
                    }`}
                    onClick={() => toggleItem(item.id)}
                  >
                    <h3 className="text-lg font-medium pr-8 text-gray-800">{item.question}</h3>
                    <span className="text-blue-600 flex-shrink-0 mt-1">
                      {expandedItems.includes(item.id) ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </span>
                  </div>
                  
                  {expandedItems.includes(item.id) && (
                    <div className="p-5 bg-blue-50 border-t border-blue-100">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {/* Still Have Questions Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-10 mt-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Still Have Questions?</h2>
            <p className="text-gray-600 mb-8">
              We're here to help. Contact our customer support team for personalized assistance.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Phone size={20} className="text-blue-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-gray-800 mb-1">Call Us</h3>
                  <a href="tel:+256414691868" className="text-blue-600 hover:text-blue-800 transition-colors">
                    +256 414 691 868
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm flex items-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <Mail size={20} className="text-green-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-gray-800 mb-1">Email Us</h3>
                  <a href="mailto:info@asantewm.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                    info@asantewm.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <a 
                href="/contact" 
                className="inline-flex items-center text-white bg-green-600 hover:bg-green-700 font-medium rounded-full px-8 py-3 transition-colors"
              >
                <PlusCircle size={18} className="mr-2" />
                Submit a Question
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage; 