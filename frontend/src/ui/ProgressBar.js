import React from 'react';

const ProgressBar = ({ percentage, showLabel = true, height = "h-4", className = "" }) => {
  // Ensure percentage is between 0 and 100
  const normalizedPercentage = Math.min(Math.max(percentage, 0), 100);

  // Determine color based on percentage
  const getColorClass = (percent) => {
    if (percent < 25) return 'bg-red-500';
    if (percent < 50) return 'bg-orange-500';
    if (percent < 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm font-medium text-gray-700">
            {normalizedPercentage}%
          </span>
        </div>
      )}
      <div 
        className={`w-full bg-gray-200 rounded-full ${height} ${className}`}
        role="progressbar"
        aria-valuenow={normalizedPercentage}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className={`${height} rounded-full transition-all duration-300 ease-in-out ${getColorClass(normalizedPercentage)}`}
          style={{ width: `${normalizedPercentage}%` }}
        >
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;