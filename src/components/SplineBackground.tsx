import { useEffect, useState } from 'react';

const SplineBackground = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.2/build/spline-viewer.js';
    script.onload = () => setIsLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="h-full w-full overflow-hidden">
      {isLoaded && (
        <spline-viewer 
          url="https://prod.spline.design/Z6CF-xvsg3Eo8veF/scene.splinecode"
          className="h-full w-full background"
        />
      )}
      {!isLoaded && (
        <div className="h-full w-full flex items-center justify-center">
          <div className="animate-pulse text-gray-400">Loading 3D background...</div>
        </div>
      )}
    </div>
  );
};

export default SplineBackground;