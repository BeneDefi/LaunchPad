import React from 'react';
import { CircleDollarSign, Star, BarChart4, Zap, Shield, Coins } from 'lucide-react';
import Button from '../ui/Button';
import FeatureCard from '../ui/FeatureCard';
import SectionTitle from '../ui/SectionTitle';

const DxMintSection = () => {
  return (
    <section className="py-8 border-b border-gray-800">
      <SectionTitle icon="✦" accentColor="text-[#3ce7b9]">
        Venture into the world of token creation with <span className="font-bold">DxMint</span>
      </SectionTitle>
      
      <p className="text-gray-400 mb-4 max-w-2xl">
        DxMint is a tool that allows you to create your own token in seconds.
      </p>
      
      <div className="mb-8">
        <Button variant="mint">Create Token</Button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <FeatureCard 
          icon={Shield} 
          title="Verified Badge on Explorers" 
          variant="mint"
        />
        <FeatureCard 
          icon={Coins} 
          title="Zero Hidden Costs" 
          variant="mint"
        />
        <FeatureCard 
          icon={BarChart4} 
          title="Already Over 100,000+ Tokens Created" 
          variant="mint"
        />
        <FeatureCard 
          icon={Zap} 
          title="No Coding Required" 
          variant="mint"
        />
        <FeatureCard 
          icon={CircleDollarSign} 
          title="Pre-audited Tokens" 
          variant="mint"
        />
        <FeatureCard 
          icon={Star} 
          title="Professional Templates" 
          variant="mint"
        />
      </div>
    </section>
  );
};

export default DxMintSection;
