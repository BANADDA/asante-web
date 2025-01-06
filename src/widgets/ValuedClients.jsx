
const ClientLogo = ({ src, alt }) => (
  <div className="bg-blue-50/50 rounded-lg p-6 flex items-center justify-center group transition-all duration-300 hover:shadow-md h-32">
    <div className="w-full h-full flex items-center justify-center">
      <img 
        src={src} 
        alt={alt}
        className="max-w-[180px] max-h-[80px] w-auto h-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
      />
    </div>
  </div>
);

const ValuedClients = () => {
  const clients = [
    {
      name: "CafeJavas",
      logo: "/img/cj.png"
    },
    {
      name: "FourPointsHotel",
      logo: "/img/four-points.png"
    },
    {
      name: "Rippling",
      logo: "/img/acacia.png"
    },
    {
      name: "Squarespace",
      logo: "/img/city-oil.jpg"
    },
    {
      name: "Segment",
      logo: "/img/cj.png"
    },
    {
      name: "Amazon",
      logo: "/img/cj.png"
    },
    {
      name: "Afterpay",
      logo: "/img/cj.png"
    },
    {
      name: "Monday.com",
      logo: "/img/cj.png"
    },
    {
      name: "SpaceX",
      logo: "/img/cj.png"
    },
    {
      name: "Intercom",
      logo: "/img/cj.png"
    }
  ];

  return (
    <section className="py-5 pt-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-2xl font-bold">
            Some Of Our Valued Clients
          </h2>
          <p className="text-gray-600 mt-4 font-medium max-w-2xl mx-auto">
            Trusted by leading companies worldwide to manage their waste efficiently and sustainably
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {clients.map((client) => (
            <ClientLogo
              key={client.name}
              src={client.logo}
              alt={`${client.name} logo`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuedClients;