import React from 'react';
// import Head from './components/Head';
import DxMintSection from '../components/sections/DxMintSection';
import DxSaleSection from '../components/sections/DxSaleSection';
import DxLockSection from '../components/sections/DxLockSection';
import DxDropSection from '../components/sections/DxDropSection';
import FinalCTASection from '../components/sections/FinalCTASection';

const DxSections = () => {
  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* <Head /> */}
        <main className="py-8">
          <DxMintSection />
          <DxSaleSection />
          <DxLockSection />
          <DxDropSection />
          <FinalCTASection />
        </main>
      </div>
    </div>
  );
};

export default DxSections;
