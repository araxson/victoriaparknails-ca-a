'use client';

import React from 'react';

interface NoResultsMessageProps {
  message?: string;
  buttonText?: string;
  buttonUrl?: string;
}

export function NoResultsMessage({
  message = "No services found matching your search criteria.",
  buttonText = "View All Services",
  buttonUrl = "/services"
}: NoResultsMessageProps) {
  
  const handleReset = () => {
    window.location.href = buttonUrl;
  };
  
  return (
    <div className="text-center py-12">
      <p className="text-lg text-muted-foreground">{message}</p>
      <button
        onClick={handleReset}
        className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
      >
        {buttonText}
      </button>
    </div>
  );
} 