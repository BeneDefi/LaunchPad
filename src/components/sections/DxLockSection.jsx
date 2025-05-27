import React from 'react';
import { Lock, ShieldCheck, Hourglass, ClipboardCheck, Clock, Users } from 'lucide-react';
import Button from '../ui/Button';
import FeatureCard from '../ui/FeatureCard';
import SectionTitle from '../ui/SectionTitle';

const DxLockSection = () => {
  return (
    <section className="py-8 border-b border-gray-800">
      <SectionTitle icon="✦" accentColor="text-[#ffa234]">
        Instill unwavering trust in your users by leveraging the security of <span className="font-bold">DxLock</span>
      </SectionTitle>
      
      <p className="text-gray-400 mb-4 max-w-2xl">
        DxLock is a tool primarily tailored for token owners and liquidity pool holders.
      </p>
      
      <div className="mb-8 flex flex-wrap gap-4">
        <Button variant="lock">Token Lock</Button>
        <Button variant="lock" className="bg-transparent border border-[#ffa234] hover:bg-[#ffa234]/10">Liquidity Lock</Button>
        <Button variant="lock" className="bg-transparent border border-[#ffa234] hover:bg-[#ffa234]/10">Other Lock Types</Button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <FeatureCard 
          icon={Lock} 
          title="Over 1,200,000+ LP Tokens and Other Assets Locked" 
          variant="lock"
        />
        <FeatureCard 
          icon={ShieldCheck} 
          title="Provides rugpull-protection for liquidity providers" 
          variant="lock"
        />
        <FeatureCard 
          icon={Hourglass} 
          title="Straight-forward locking experience" 
          variant="lock"
        />
        <FeatureCard 
          icon={ClipboardCheck} 
          title="Trustless locking system" 
          variant="lock"
        />
        <FeatureCard 
          icon={Clock} 
          title="Time-controlled unlocks" 
          variant="lock"
        />
        <FeatureCard 
          icon={Users} 
          title="Allows ownership transfer to other wallets" 
          variant="lock"
        />
      </div>
    </section>
  );
};

export default DxLockSection;
