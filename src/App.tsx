import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { CategoryEvents } from './pages/CategoryEvents';
import { EventDetails } from './pages/EventDetails';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<CategoryEvents />} />
          <Route path="/event/:id" element={<EventDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;