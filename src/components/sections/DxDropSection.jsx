import React from 'react';
import { Gift, Wifi, Award } from 'lucide-react';
import Button from '../ui/Button';
import FeatureCard from '../ui/FeatureCard';
import SectionTitle from '../ui/SectionTitle';

const DxDropSection = () => {
  return (
    <section className="py-8 border-b border-gray-800">
      <SectionTitle icon="✦" accentColor="text-[#ff77e3]">
        Empower your token distribution through one-click airdrops to multiple addresses with unparalleled efficiency of <span className="font-bold">DxDrop</span>
      </SectionTitle>

      <p className="text-gray-400 mb-4 max-w-2xl">
        DxDrop streamlines the process of distributing tokens, allowing you to distribute them to multiple addresses effortlessly with just a single click!
      </p>

      <div className="mb-8">
        <Button variant="drop">Create Airdrop</Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <FeatureCard 
          icon={Gift} 
          title="Airdrops with vesting periods" 
          variant="drop"
        />
        <FeatureCard 
          icon={Wifi} 
          title="Trustless locking system" 
          variant="drop"
        />
        <FeatureCard 
          icon={Award} 
          title="Bulk send tokens to wallets" 
          variant="drop"
        />
      </div>
    </section>
  );
};

export default DxDropSection;
