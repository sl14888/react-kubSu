import React from 'react';
import { Navbar } from './Navbar';
import TopSection from './components/TopSection';

function HeaderSection() {
  return (
    <header className="HeaderSection" id="Home">
      <Navbar />
      <TopSection />
    </header>
  );
}

export default HeaderSection;
