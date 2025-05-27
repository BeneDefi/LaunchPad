import React from 'react';
import { Rocket, Clock, ArrowDownToLine, PieChart, CalendarDays, Settings } from 'lucide-react';
import Button from '../ui/Button';
import FeatureCard from '../ui/FeatureCard';
import SectionTitle from '../ui/SectionTitle';

const DxSaleSection = () => {
  return (
    <section className="py-8 border-b border-gray-800">
      <SectionTitle icon="✦" accentColor="text-[#3a9eff]">
        Unleash your long-awaited project in mere minutes with our simple launch product <span className="font-bold">DxSale</span>.
      </SectionTitle>
      
      <p className="text-gray-400 mb-4 max-w-2xl">
        DxSale gives you all the tools you need in an easy, stress free way to carry out your token launch.
      </p>
      
      <div className="mb-8 flex flex-wrap gap-4">
        <Button variant="sale">Start Presale</Button>
        <Button variant="sale" className="bg-transparent border border-[#3a9eff] hover:bg-[#3a9eff]/10">Open DxSale</Button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <FeatureCard 
          icon={Rocket} 
          title="Over 150 total projects launched through DxSale" 
          variant="sale"
        />
        <FeatureCard 
          icon={Clock} 
          title="Leads in customizable presales" 
          variant="sale"
        />
        <FeatureCard 
          icon={ArrowDownToLine} 
          title="Advanced liquidity lock" 
          variant="sale"
        />
        <FeatureCard 
          icon={PieChart} 
          title="Auto-finalizing presales over funding limit" 
          variant="sale"
        />
        <FeatureCard 
          icon={CalendarDays} 
          title="Customizable vesting period" 
          variant="sale"
        />
        <FeatureCard 
          icon={Settings} 
          title="Whitelist priority options" 
          variant="sale"
        />
      </div>
    </section>
  );
};

export default DxSaleSection;
