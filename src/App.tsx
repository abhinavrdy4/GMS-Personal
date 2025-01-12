import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SearchProvider } from './contexts/SearchContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { CategoryEvents } from './pages/CategoryEvents';
import { CategoryClasses } from './pages/CategoryClasses';
import { WorkshopDetails } from './pages/WorkshopDetails';
import { RegularClassDetails } from './pages/RegularClassDetails';
import { SearchResults } from './pages/SearchResults';

export function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:category" element={<CategoryEvents />} />
            <Route path="/regulars" element={<CategoryClasses />} />
            <Route path="/workshop/:id" element={<WorkshopDetails />} />
            <Route path="/class/:id" element={<RegularClassDetails />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </Layout>
      </SearchProvider>
    </BrowserRouter>
  );
}