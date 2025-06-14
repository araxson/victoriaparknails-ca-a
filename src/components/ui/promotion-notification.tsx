"use client";

import { useEffect, useState, useCallback } from 'react';
import { toast } from 'sonner';
import { promotions } from '@/data/promotions';
import { Badge } from '@/components/ui/shadcn/data-display/badge';

const PromoToast = ({ title, description, discount }: { title: string; description: string; discount: string }) => {
  return (
    <div className="relative w-full">
      <div className="absolute -top-3 -right-3 z-50">
        <Badge 
          variant="destructive" 
          size="sm"
          className="bg-red-500 border-red-500 font-bold px-2 py-0.5 rounded"
        >
          {discount}
        </Badge>
      </div>
      
      <div className="flex flex-col items-start pr-8 pt-2">
        <div className="font-semibold">{title}</div>
        <div className="text-sm opacity-90">{description}</div>
      </div>
    </div>
  );
};

export function PromotionNotification() {
  const [dismissed, setDismissed] = useState(false);
  const [currentPromoIndex, setCurrentPromoIndex] = useState(0);
  
  // Filter featured promotions
  const featuredPromos = promotions.filter(promo => promo.featured);
  
  // Function to show notification
  const showPromoNotification = useCallback(() => {
    if (featuredPromos.length === 0 || dismissed) return;
    
    const promo = featuredPromos[currentPromoIndex];

    toast(<PromoToast title={promo.title} description={promo.description} discount={promo.discount} />, {
      id: `promotion-${promo.id}`,
      duration: 10000,
      position: "bottom-left",
      closeButton: false,
      className: "promotion-toast",
      onDismiss: () => setDismissed(true)
    });
    
    // Set up next promotion to show
    setCurrentPromoIndex((prev) => (prev + 1) % featuredPromos.length);
  }, [currentPromoIndex, dismissed, featuredPromos]);
  
  // Initial notification display with delay
  useEffect(() => {
    if (featuredPromos.length === 0) return;
    
    // Clear any dismissed state from session storage
    sessionStorage.removeItem('promotion_dismissed');
    
    // Show notification after delay
    const timer = setTimeout(() => {
      showPromoNotification();
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [featuredPromos.length, showPromoNotification]);
  
  // Rotate through promotions
  useEffect(() => {
    if (featuredPromos.length <= 1 || dismissed) return;
    
    const rotateTimer = setInterval(() => {
      showPromoNotification();
    }, 20000); // Show a new promotion every 20 seconds
    
    return () => clearInterval(rotateTimer);
  }, [featuredPromos.length, dismissed, showPromoNotification]);

  // This component doesn't render anything visible itself, 
  // it just controls the toast notifications
  return null;
} 