import {
    Award,
    Briefcase,
    CheckCircle,
    ChevronDown, ChevronUp,
    Clock,
    FileText,
    Heart,
    Mail,
    MapPin,
    Phone,
    Send, User,
    Users,
    X
} from 'lucide-react';
import { useState } from 'react';

// Sample job data - in a real app, this would come from an API or CMS
const jobListings = [
  {
    id: 1,
    title: "Waste Management Specialist",
    location: "Kampala, Uganda",
    type: "Full-time",
    salary: "Competitive",
    posted: "2 weeks ago",
    department: "Operations",
    description: "As a Waste Management Specialist at Asante Waste Management, you will be responsible for overseeing waste collection operations and ensuring compliance with environmental regulations.",
    responsibilities: [
      "Plan and coordinate waste collection routes for maximum efficiency",
      "Monitor and ensure compliance with environmental regulations and standards",
      "Oversee waste sorting and recycling processes",
      "Maintain accurate records of waste collection and disposal",
      "Train and supervise waste collection teams",
      "Implement and improve waste management protocols"
    ],
    requirements: [
      "Bachelor's degree in Environmental Science, Engineering, or related field",
      "Minimum 2 years experience in waste management or related field",
      "Knowledge of local environmental regulations and policies",
      "Strong organizational and leadership skills",
      "Valid driver's license",
      "Excellent communication and problem-solving abilities"
    ]
  },
  {
    id: 2,
    title: "Environmental Compliance Officer",
    location: "Kampala, Uganda",
    type: "Full-time",
    salary: "Competitive",
    posted: "1 week ago",
    department: "Compliance",
    description: "The Environmental Compliance Officer will ensure that all company operations meet or exceed environmental regulations and standards. You will work closely with operations teams to implement sustainable practices.",
    responsibilities: [
      "Monitor and evaluate company's compliance with environmental laws and regulations",
      "Conduct regular environmental audits and inspections",
      "Develop and maintain environmental management systems",
      "Prepare environmental reports and documentation",
      "Liaise with regulatory authorities on compliance matters",
      "Train staff on environmental best practices and compliance requirements"
    ],
    requirements: [
      "Bachelor's degree in Environmental Science, Environmental Law, or related field",
      "3+ years experience in environmental compliance or regulatory affairs",
      "In-depth knowledge of environmental regulations and standards",
      "Experience with environmental management systems (ISO 14001 preferred)",
      "Strong analytical and reporting skills",
      "Excellent communication and interpersonal abilities"
    ]
  },
  {
    id: 3,
    title: "Recycling Program Coordinator",
    location: "Kampala, Uganda",
    type: "Full-time",
    salary: "Competitive",
    posted: "3 days ago",
    department: "Sustainability",
    description: "The Recycling Program Coordinator will develop and implement effective recycling programs for our clients and communities. This role focuses on maximizing waste diversion through recycling initiatives.",
    responsibilities: [
      "Design and implement recycling programs for commercial and residential clients",
      "Conduct waste audits to identify recycling opportunities",
      "Develop educational materials and conduct training on recycling practices",
      "Track and report on recycling metrics and program effectiveness",
      "Coordinate with operations teams to optimize recycling collection",
      "Engage with community partners to promote recycling awareness"
    ],
    requirements: [
      "Bachelor's degree in Environmental Studies, Sustainability, or related field",
      "2+ years experience in recycling programs or waste management",
      "Knowledge of recycling processes, markets, and best practices",
      "Strong project management and organizational skills",
      "Excellent presentation and communication abilities",
      "Passion for environmental sustainability and community engagement"
    ]
  }
];

// Company values and culture data
const companyValues = [
  {
    icon: <Heart className="w-10 h-10 text-green-500" />,
    title: "Environmental Stewardship",
    description: "We're dedicated to protecting our environment through responsible waste management practices and innovative recycling solutions."
  },
  {
    icon: <Users className="w-10 h-10 text-green-500" />,
    title: "Community Focus",
    description: "We believe in building stronger, cleaner communities through education, engagement, and sustainable waste management solutions."
  },
  {
    icon: <Award className="w-10 h-10 text-green-500" />,
    title: "Excellence & Innovation",
    description: "We strive for excellence in everything we do, constantly innovating to improve our services and environmental impact."
  }
];

const CareersPage = () => {
  const [expandedJob, setExpandedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [currentJobId, setCurrentJobId] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null
  });
  
  const toggleJobExpand = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };
  
  const openApplicationForm = (jobId) => {
    setCurrentJobId(jobId);
    setShowApplicationForm(true);
    setFormSubmitted(false);
  };
  
  const closeApplicationForm = () => {
    setShowApplicationForm(false);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0]
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    // For demo purposes, we'll just simulate a successful submission
    setTimeout(() => {
      setFormSubmitted(true);
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        coverLetter: '',
        resume: null
      });
    }, 1000);
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-800 to-blue-800 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl opacity-90 mb-8">
              Be part of a mission to create a cleaner, more sustainable future through innovative waste management solutions.
            </p>
            <a 
              href="#openings" 
              className="inline-block bg-white text-green-700 font-medium rounded-full px-8 py-3 transition-all hover:bg-opacity-90 hover:scale-105"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>
      
      {/* Company Culture Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Our Company Culture</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              At Asante Waste Management, we're more than just a waste management company. We're a team of dedicated professionals committed to making a positive impact on our environment and communities.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Job Listings Section */}
      <div id="openings" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Current Openings</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Explore our current job opportunities and find your perfect role in our growing team.
            </p>
            
            <div className="space-y-6">
              {jobListings.map((job) => (
                <div key={job.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {/* Job Header */}
                  <div 
                    className="p-6 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleJobExpand(job.id)}
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 mt-2">
                        <span className="flex items-center text-sm text-gray-600">
                          <MapPin size={16} className="mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center text-sm text-gray-600">
                          <Briefcase size={16} className="mr-1" />
                          {job.type}
                        </span>
                        <span className="flex items-center text-sm text-gray-600">
                          <Clock size={16} className="mr-1" />
                          Posted {job.posted}
                        </span>
                      </div>
                    </div>
                    <span className="text-blue-600">
                      {expandedJob === job.id ? (
                        <ChevronUp size={24} />
                      ) : (
                        <ChevronDown size={24} />
                      )}
                    </span>
                  </div>
                  
                  {/* Job Details */}
                  {expandedJob === job.id && (
                    <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                      <p className="text-gray-700 mb-6">{job.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 text-gray-800">Responsibilities:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          {job.responsibilities.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 text-gray-800">Requirements:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          {job.requirements.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-8">
                        <button 
                          onClick={() => openApplicationForm(job.id)}
                          className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md flex items-center transition-colors"
                        >
                          <Send size={16} className="mr-2" />
                          Apply for this position
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Application Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto">
            {formSubmitted ? (
              <div className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle size={60} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest in joining our team. We'll review your application and contact you soon.
                </p>
                <button 
                  onClick={closeApplicationForm}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center border-b border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Apply for: {jobListings.find(job => job.id === currentJobId)?.title}
                  </h3>
                  <button 
                    onClick={closeApplicationForm}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <form onSubmit={handleSubmit} className="p-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User size={16} className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="pl-10 w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail size={16} className="text-gray-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="pl-10 w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="johndoe@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone size={16} className="text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="pl-10 w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="+256 XXX XXX XXX"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
                      <textarea
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                      ></textarea>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Resume/CV</label>
                      <div className="relative border border-gray-300 rounded-md py-2 px-4 bg-gray-50">
                        <div className="flex items-center">
                          <FileText size={16} className="text-gray-400 mr-2" />
                          <label className="block w-full cursor-pointer">
                            <span className="text-gray-500">
                              {formData.resume ? formData.resume.name : "Upload your CV (PDF, DOC, or DOCX)"}
                            </span>
                            <input
                              type="file"
                              name="resume"
                              onChange={handleFileChange}
                              accept=".pdf,.doc,.docx"
                              className="hidden"
                              required
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <button 
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md flex items-center justify-center transition-colors"
                    >
                      <Send size={16} className="mr-2" />
                      Submit Application
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CareersPage;