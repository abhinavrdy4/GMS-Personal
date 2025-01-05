import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { CategoryEvents } from './pages/CategoryEvents';
import { CategoryClasses } from './pages/CategoryClasses';
import { EventDetails } from './pages/EventDetails';
import { RegularClassDetails } from './pages/RegularClassDetails';

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<CategoryEvents />} />
          <Route path="/regulars" element={<CategoryClasses />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/class/:id" element={<RegularClassDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}