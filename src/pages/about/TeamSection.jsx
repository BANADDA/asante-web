import { Facebook, Mail } from 'lucide-react';

// Team member data with positions relevant to a waste management company
const teamMembers = [
  {
    id: 1,
    name: "David Mukasa",
    position: "Founder & CEO",
    bio: "Former environmental consultant with over 15 years of experience in waste management across East Africa.",
    image: "/img/team-1.jpg",
    facebook: "https://facebook.com",
    email: "david@asantewaste.com"
  },
  {
    id: 2,
    name: "Sarah Namuli",
    position: "Operations Director",
    bio: "Leads our field operations teams. Previously managed large-scale waste collection programs in Uganda.",
    image: "/img/team-2.jpg",
    facebook: "https://facebook.com",
    email: "sarah@asantewaste.com"
  },
  {
    id: 3,
    name: "Jacob Ochieng",
    position: "Sustainability Manager",
    bio: "Environmental scientist specializing in waste recovery systems and recycling protocols.",
    image: "/img/team-3.jpg",
    facebook: "https://facebook.com",
    email: "jacob@asantewaste.com"
  },
  {
    id: 4,
    name: "Elizabeth Kwagala",
    position: "Community Outreach Director",
    bio: "Leads our education programs. Expert in building community partnerships for waste management.",
    image: "/img/team-4.png",
    facebook: "https://facebook.com",
    email: "elizabeth@asantewaste.com"
  },
  {
    id: 5,
    name: "Daniel Okello",
    position: "Technical Manager",
    bio: "Oversees our waste processing facilities and equipment maintenance with engineering expertise.",
    image: "/img/team-5.png",
    facebook: "https://facebook.com",
    email: "daniel@asantewaste.com"
  }
];

const TeamSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-1">
              The Asante Waste Management Team
            </h2>
          </div>
          <div className="max-w-md mt-1 md:mt-0">
            <p className="text-gray-600">
              Our philosophy is simple; hire great people and give them the resources and support to do their best work. Together, we're transforming waste management across Uganda.
            </p>
          </div>
        </div>
      </div>
      
      {/* Card row with light blue background */}
      <div className="bg-blue-50 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-sm" data-aos="fade-up" data-aos-delay={member.id * 100}>
                <div className="h-40 overflow-hidden bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-gray-900">{member.name}</h3>
                  <p className="text-blue-700 text-sm mb-1">{member.position}</p>
                  <p className="text-gray-600 text-xs mb-2">{member.bio}</p>
                  
                  {/* Social Media and Contact */}
                  <div className="flex items-center gap-2 mt-2">
                    <a 
                      href={member.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                      aria-label={`${member.name}'s Facebook`}
                    >
                      <Facebook size={16} />
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-gray-600 hover:text-gray-800 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 