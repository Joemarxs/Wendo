import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { CategorySection } from '../components/CategorySection';
import { HistorySection } from '../components/HistorySection';
import { ShippingSection } from '../components/ShippingSection';
export function Home() {
  return <>
      <Hero />
      <FeaturedProducts />
      <CategorySection />
      <HistorySection />
      <ShippingSection />
    </>;
}