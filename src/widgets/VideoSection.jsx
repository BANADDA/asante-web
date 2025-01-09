import { Maximize, Pause, Play } from 'lucide-react';
import { useRef, useState } from 'react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <div 
      className="relative rounded-lg overflow-hidden bg-black"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        className="w-full h-80 object-cover"
        poster="/img/bg.jpg"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        controls={false}
      >
        <source src="/video/waste-management.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Custom Controls */}
      <div className={`
        absolute inset-0 flex items-center justify-center
        bg-black/30 transition-opacity duration-300
        ${showControls ? 'opacity-100' : 'opacity-0'}
      `}>
        {/* Play/Pause Button */}
        <button
          onClick={handlePlayPause}
          className="
            p-4 rounded-full bg-white/20 hover:bg-white/30
            transition-all duration-300 backdrop-blur-sm
            group
          "
        >
          {isPlaying ? (
            <Pause className="w-8 h-8 text-white" />
          ) : (
            <Play className="w-8 h-8 text-white" />
          )}
        </button>
      </div>

      {/* Bottom Controls */}
      <div className={`
        absolute bottom-0 left-0 right-0
        p-4 bg-gradient-to-t from-black/70 to-transparent
        flex items-center justify-between
        transition-opacity duration-300
        ${showControls ? 'opacity-100' : 'opacity-0'}
      `}>
        <div className="text-white text-sm">Waste Management Overview</div>
        <button
          onClick={handleFullscreen}
          className="p-2 hover:bg-white/10 rounded transition-colors duration-200"
        >
          <Maximize className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default VideoSection;