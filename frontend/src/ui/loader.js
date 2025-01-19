import React from "react";

const LoadingSpinner = () => (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-gray-100">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );

export default LoadingSpinner;