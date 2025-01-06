import { Download, FileText } from 'lucide-react';

const DownloadButton = ({ filename, displayName }) => {
  const handleDownload = () => {
    // Construct the file path in the public directory
    const filepath = `/pdf/${filename}`;
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = filepath;
    link.target = '_blank';
    link.download = filename;
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button 
      onClick={handleDownload}
      className="flex items-center justify-between bg-green-700 hover:bg-green-800 text-white p-4 rounded transition-colors duration-200"
    >
      <span className="flex items-center gap-2">
        <FileText className="w-4 h-4" />
        {displayName}
      </span>
      <Download className="w-4 h-4" />
    </button>
  );
};

const DownloadSection = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl font-semibold mb-4">Download Brochure</h3>
      <div className="flex flex-col gap-2">
        <DownloadButton 
          filename="company-profile-2025.pdf" 
          displayName="Our Profile 2025" 
        />
        <DownloadButton 
          filename="residential-rates.pdf" 
          displayName="Residential Rate Card" 
        />
      </div>
    </div>
  );
};

export default DownloadSection;