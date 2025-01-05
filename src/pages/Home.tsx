import React from 'react';
import { Banner } from '../components/Banner/Banner';
import { Categories } from '../components/Categories';
import { TrendingSection } from '../components/TrendingSection/TrendingSection';

export const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <TrendingSection 
        title="Trending Workshops" 
        subtitle="Discover our most popular upcoming workshops"
      />
      <TrendingSection 
        title="Featured Regular Classes" 
        subtitle="Join our top-rated ongoing classes"
      />
    </>
  );
};