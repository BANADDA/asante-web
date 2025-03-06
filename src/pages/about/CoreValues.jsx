import { Award, DollarSign, Heart, Lightbulb, ShieldCheck, Target, UserCheck, Users } from 'lucide-react';

const ValueCard = ({ icon: Icon, title, description, index }) => (
  <div 
    className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center hover:bg-blue-50 transition-colors duration-300 min-w-full"
    data-aos="fade-up" 
    data-aos-delay={100 + (index * 50)}
  >
    <div className="mb-3">
      <Icon className="w-10 h-10 text-blue-600" />
    </div>
    <h3 className="text-base font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">
      {description}
    </p>
  </div>
);

const CoreValues = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Health & Safety',
      description: 'Our constant up-grades and training policies have helped us protect our people and communities by incorporating safety at all levels of our business.'
    },
    {
      icon: Award,
      title: 'Quality & Reliability',
      description: 'We strive to provide a high level of quality and consistency in the services & products that our customers can rely on at all levels of our business.'
    },
    {
      icon: Heart,
      title: 'Transparency & Integrity',
      description: 'We are well trained, honest and empowered to take full responsibility for our actions and decisions in all our dealings as we require our stakeholders to do the same.'
    },
    {
      icon: Target,
      title: 'Commitment & Passion',
      description: 'We are target oriented company and we cannot achieve our mission or goals without these 2 major performance Indicators.'
    },
    {
      icon: Users,
      title: 'Synergy & Teamwork',
      description: 'Our policies and systems have been put in place to enhance teamwork & synergy, streamline our operations and enhance our efficiency within our organization and its stakeholders.'
    },
    {
      icon: UserCheck,
      title: 'Equal Employee Opportunities & Empowerment',
      description: 'We value our people and do not discriminate as we treat them equally with dignity for all to take advantage of their full potential and opportunity in the business.'
    },
    {
      icon: Lightbulb,
      title: 'Creativity & Innovation',
      description: 'We encourage employees to serve clients using creative and proactive means for practical plans and ideas development.'
    },
    {
      icon: DollarSign,
      title: 'Value for Money',
      description: 'The customer is the most important element in all our operations, all efforts are geared towards customer satisfaction.'
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-5">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-3">Our Core Values</h2>
          <p className="text-gray-600 text-base max-w-3xl mx-auto">
            Our values provide the foundation for our company's practices and standards as we exhibit the highest ethical standards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;