import { Award, CheckCircle, Heart, Lightbulb, Shield, Target, Users, Zap } from 'lucide-react';

const coreValues = [
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Creativity & Innovation",
    description: "We encourage all our employees to serve clients using creative and proactive means for the development of practical plans and ideas of the company, its customers and all its stakeholders."
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Value for Money & Customer-oriented Services",
    description: "The customer is the most important element in all our businesses & operations, therefore all our efforts are geared towards making the customer happy."
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Health & Safety",
    description: "Our constant up-grades and training policies have helped us protect our people and communities by incorporating safety at all levels of our business."
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Quality & Reliability",
    description: "We strive to provide a high level of quality and consistency in the services & products that our customers can rely on at all levels of our business."
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "Transparency & Integrity",
    description: "We are well trained, honest and empowered to take full responsibility for our actions and decisions in all our dealings as we require our stakeholders to do the same."
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Commitment & Passion",
    description: "We are target oriented company and we cannot achieve our mission or goals without these 2 major performance indicators."
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Synergy & Teamwork",
    description: "Our policies and systems have been put in place to enhance teamwork & synergy, streamline our operations and enhance our efficiency within our organization and its stakeholders."
  }
];

const CompanyPhilosophy = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Delivering on our promise by living our values
        </h2>
        
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm border border-blue-100">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Our Promise</h3>
            <p className="text-gray-700 text-sm">We protect what matters.</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg shadow-sm border border-green-100">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Our Mission</h3>
            <p className="text-gray-700 text-sm">To be the champions of responsible waste management in the areas we serve through our people; by promoting a circular approach to waste while maintaining a steady but profitable growth.</p>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg shadow-sm border border-amber-100">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Our Vision</h3>
            <p className="text-gray-700 text-sm">To carve a globally acclaimed brand out of delivering reliable, convenient, and sustainable waste management services through collaborating with customers and communities to manage & reduce waste while recovering valuable resources and creating clean, renewable energy.</p>
          </div>
        </div>
        
        <div className="mb-10">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <Target className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Philosophy</h3>
            <div className="text-base font-semibold text-blue-800 mb-4">#Do_it_right</div>
            <p className="text-base italic text-gray-700 mb-4">"Asante Waste Management is guided by the Philosophy that all waste is a Sustainable Resource."</p>
            <p className="text-sm text-gray-700">
              As part of our sustainable approach, we aim to incorporate recovery, recycling and reuse throughout our operations as well as those of our customers. We view the notion of sustainability as fundamental to the way we operate - it is part of our corporate DNA and is considered 'business as usual' at Asante Waste Management.
            </p>
          </div>
        </div>
        
        {/* Core Values section with blue background */}
        <div className="bg-blue-50 py-8 px-4 -mx-4">
          <div className="container mx-auto">
            <h3 className="text-xl font-bold text-center text-gray-900 mb-6">
              Our Core Values
              <div className="w-12 h-1 bg-blue-600 mx-auto mt-3"></div>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coreValues.map((value, index) => (
                <div key={index} className="flex bg-white p-3 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="flex-shrink-0 mr-3 text-blue-600">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 text-sm">{value.title}</h4>
                    <p className="text-xs text-gray-700">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-base font-semibold text-gray-900">"Our Values remain constant – Even though our world is ever changing."</p>
              <p className="italic text-sm text-gray-700">- Rodney Mukula, Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyPhilosophy; 