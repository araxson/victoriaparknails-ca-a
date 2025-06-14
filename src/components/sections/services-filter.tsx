"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { serviceCategories } from '@/data';
import { Input } from '@/components/ui/shadcn/inputs/input';
import { Search } from 'lucide-react';
import { AnimatedOnce } from '@/components/ui/animated-filtered-results';

export function ServicesFilter() {
  const router = useRouter();
  const searchParamsObj = useSearchParams();
  const searchParams = useMemo(() => searchParamsObj || new URLSearchParams(), [searchParamsObj]);
  const currentCategory = searchParams.get('category') || 'all';
  const currentSearch = searchParams.get('search') || '';
  const scrollPositionRef = useRef(0);
  const [searchTerm, setSearchTerm] = useState(currentSearch);
  const searchTimeout = useRef<NodeJS.Timeout | null>(null);
  
  // Update the search term when URL changes
  useEffect(() => {
    setSearchTerm(currentSearch);
  }, [currentSearch]);
  
  // Save scroll position before filter changes
  useEffect(() => {
    // Store the current scroll position
    scrollPositionRef.current = window.scrollY;
  }, [searchParams]);

  const updateFilters = (params: URLSearchParams) => {
    // Save scroll position before navigation
    scrollPositionRef.current = window.scrollY;
    
    // Use replace instead of push to avoid adding to history stack
    router.replace(`?${params.toString()}`, {
      scroll: false // This prevents scrolling to top in Next.js 13.4+
    });

    // Restore scroll position after a slight delay to ensure rendering completes
    setTimeout(() => {
      window.scrollTo(0, scrollPositionRef.current);
    }, 0);
  };

  const handleCategoryChange = (categoryId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('category', categoryId);
    updateFilters(params);
  };
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    // Clear any existing timeout
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }
    
    // Set a new timeout to update search params after typing stops
    searchTimeout.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      
      if (value) {
        params.set('search', value);
      } else {
        params.delete('search');
      }
      
      updateFilters(params);
    }, 300); // 300ms debounce
  };
  
  // Clear timeout on component unmount
  useEffect(() => {
    return () => {
      if (searchTimeout.current) {
        clearTimeout(searchTimeout.current);
      }
    };
  }, []);
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    
    if (searchTerm) {
      params.set('search', searchTerm);
    } else {
      params.delete('search');
    }
    
    updateFilters(params);
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-4">      <AnimatedOnce>
        <form onSubmit={handleSearchSubmit} className="relative">
          <Input
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </form>
      </AnimatedOnce>
      
      <AnimatedOnce>
        <Select onValueChange={handleCategoryChange} defaultValue={currentCategory}>
          <SelectTrigger className="w-full py-2 text-md">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all" className="text-md py-2">
              All Services
            </SelectItem>
            {serviceCategories.map((category) => (
              <SelectItem key={category.id} value={category.id} className="text-md py-2">
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </AnimatedOnce>
    </div>
  );
} 