import { Recycle, RecycleIcon } from 'lucide-react';

const RecyclingSection = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Changed to grid-cols-7 for even finer control */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-12">
        {/* Left section now spans 4 columns */}
        <div className="lg:col-span-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Worker Image - reduced height */}
            <div className="relative h-[400px]">
              <img 
                src="/img/bg.jpg" 
                alt="Construction worker" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Recycling Bins - reduced height */}
            <div className="relative h-[300px]">
              <img 
                src="/img/bg.jpg" 
                alt="Recycling bins" 
                className="w- h-60 full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Quote overlay */}
          <div className="absolute bottom-8 left-8 right-8 z-10">
            <div className="bg-white p-6 rounded border-2 border-red-500">
              <div className="flex items-start">
                <span className="text-5xl leading-none text-gray-400 -mt-2 mr-2">"</span>
                <p className="text-gray-600 text-lg">
                  We have compiled a list of some of the catchiest recycling slogans and tag lines ever thought up.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right content section now spans 3 columns and has more padding */}
        <div className="lg:col-span-3 space-y-8 pl-4">
          {/* Main heading */}
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            When You Refuse To Reuse It's Our Earth You Abuse
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg">
            You can reduce pollution and help the world too. Be the change you want to see in the world: Reduce, Reuse, Recycle. Recycling is a process that converts the waste material, thought.
          </p>

          {/* Sections with icons */}
          <div className="space-y-8 mt-12">
            {/* Drastic, Cut The Plastic section */}
            <div className="flex items-start gap-6">
              <div className="bg-gray-100 p-4 rounded-lg">
                <RecycleIcon className="w-8 h-8 text-red-500" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Drastic, Cut The Plastic!</h2>
                <p className="text-gray-600">
                  We have compiled a list of some of the catchiest recycling slogans and tag lines ever thought up.
                </p>
              </div>
            </div>

            {/* Business Commercial Waste section */}
            <div className="flex items-start gap-6">
              <div className="bg-gray-100 p-4 rounded-lg">
                <Recycle className="w-8 h-8 text-red-500" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Business Commercial Waste</h2>
                <p className="text-gray-600">
                  We have compiled a list of some of the catchiest recycling slogans and tag lines ever thought up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecyclingSection;