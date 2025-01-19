import React, { useMemo } from 'react';
import { Calendar, Clock, CheckCircle, FileText, Users, Target, List, Clipboard, Search, MapPin } from 'lucide-react';

const BackgroundPattern = React.memo(() => {
  // Move icons array outside of component or use useMemo for it as well
  const icons = useMemo(() => [
    Calendar, Clock, CheckCircle, FileText, Users, Target, List, Clipboard, Search, MapPin
  ], []);
  
  const patterns = useMemo(() => 
    Array.from({ length: 50 }).map((_, i) => {
      const Icon = icons[i % icons.length];
      const size = Math.random() * 30 + 20;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const opacity = Math.random() * 0.5 + 0.3;

      return (
        <Icon
          key={i}
          style={{
            position: 'absolute',
            top: `${top}%`,
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            opacity: opacity,
          }}
          color="rgba(85, 85, 61, 0.7)"
        />
      );
    }),
    [icons] // Add icons as a dependency
  );

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-800">
      {patterns}
    </div>
  );
});

BackgroundPattern.displayName = 'BackgroundPattern';

export default BackgroundPattern;