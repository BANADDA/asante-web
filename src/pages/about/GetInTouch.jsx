import { Link } from 'react-router-dom';

const GetInTouch = () => {
  return (
    <section className="py-8 bg-blue-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Get in touch
        </h2>
        
        <p className="text-sm text-gray-700 mb-1 max-w-xl mx-auto">
          Do you have a question? Need a quote or some advice?
        </p>
        
        <p className="text-sm text-gray-700 mb-4">
          Contact our team today.
        </p>
        
        <Link 
          to="/contact" 
          className="inline-block bg-green-800 hover:bg-green-900 text-white font-medium py-2 px-6 rounded-full transition-colors w-full max-w-xs text-sm"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default GetInTouch; 