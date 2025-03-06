import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin } from 'lucide-react';
import { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet';

// Fix Leaflet default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Add a custom CSS style for the pulsing marker
const pulsingMarkerStyle = `
  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.3); opacity: 0.7; }
    100% { transform: scale(1); opacity: 1; }
  }
  
  .pulse-marker {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #4ade80;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -9px 0 0 -9px;
    box-shadow: 0 0 0 rgba(74, 222, 128, 0.4);
    animation: pulse 2s infinite;
  }
  
  .marker-pin {
    width: 36px;
    height: 36px;
    border-radius: 50% 50% 50% 0;
    background: #3b82f6;
    position: absolute;
    transform: rotate(-45deg);
    left: 50%;
    top: 50%;
    margin: -25px 0 0 -18px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
  }
  
  .marker-pin::after {
    content: '';
    width: 24px;
    height: 24px;
    margin: 6px 0 0 6px;
    background: white;
    position: absolute;
    border-radius: 50%;
  }
  
  .custom-popup .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  .custom-popup .leaflet-popup-tip {
    background: rgba(255, 255, 255, 0.9);
  }
`;

// Create a custom marker icon using HTML and CSS
const createCustomMarkerIcon = () => {
  return L.divIcon({
    className: 'custom-marker-icon',
    html: `<div class="marker-pin"></div><div class="pulse-marker"></div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
  });
};

const LocationMap = () => {
  // Set coordinates for Asante Waste Management
  const center = [0.3183056, 32.6330917];
  
  // Prepare the Google Maps URL for directions
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${center[0]},${center[1]}&travelmode=driving`;

  // Inject the custom CSS into the document head
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = pulsingMarkerStyle;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div className="w-full h-96 relative overflow-hidden">
      {/* Leaflet Map */}
      <MapContainer 
        center={center} 
        zoom={19} // Very high zoom level for close-up view
        style={{ width: '100%', height: '100%' }}
        zoomControl={false} // We'll add zoom control in a better position
      >
        {/* Satellite imagery from ESRI */}
        <TileLayer
          attribution='&copy; <a href="https://www.esri.com/">Esri</a> | &copy; Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />

        {/* Add zoom control to the top-right */}
        <ZoomControl position="topright" />

        {/* Custom animated marker */}
        <Marker 
          position={center} 
          icon={createCustomMarkerIcon()} 
          title="Asante Waste Management"
        >
          <Popup className="custom-popup" minWidth={220} closeButton={false}>
            <div className="text-center p-2">
              <h3 className="font-bold text-green-700 text-lg mb-1">Asante Waste Management</h3>
              <p className="text-sm text-gray-600 mb-2">Luzira Industrial Park, Kampala</p>
              <div className="flex justify-center mt-2">
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-700 text-white text-xs py-1 px-3 rounded-full flex items-center transition-colors"
                >
                  <MapPin size={12} className="mr-1" /> Get Directions
                </a>
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      {/* Overlay with company information - with darker background for better visibility on satellite */}
      <div className="absolute bottom-4 right-4 bg-white/90 p-4 rounded-lg shadow-md z-[1000] flex items-center">
        <div className="w-10 h-10 mr-3 rounded-full border-2 border-green-100 bg-green-50 flex items-center justify-center">
          <MapPin size={18} className="text-green-700" />
        </div>
        <div>
          <div className="font-semibold text-green-700">Asante Waste Management</div>
          <div className="text-gray-500 text-xs flex items-center">
            <MapPin size={12} className="mr-1" /> Luzira Industrial Park, Kampala
          </div>
          <a
            href={googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-xs flex items-center mt-1"
          >
            Get Directions →
          </a>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
