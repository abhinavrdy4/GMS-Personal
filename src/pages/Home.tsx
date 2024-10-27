import React from 'react';
import { Banner } from '../components/Banner/Banner';
import { Categories } from '../components/Categories';
import { EventsGrid } from '../components/EventsGrid';

export const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <EventsGrid />
    </>
  );
};