import React from 'react';
import FooterColumn from './FooterColum';
import SocialIcon from './SocialIcon';

const productLinks = [
  { text: 'DxMint', href: '#' },
  { text: 'DxSale', href: '#' },
  { text: 'DxLock', href: '#' },
  { text: 'DxDrop', href: '#' },
];

const companyLinks = [
  { text: 'Our Story', href: '#' },
  { text: 'Press Kit', href: '#' },
  { text: 'Terms of Use', href: '#' },
  { text: 'Private Policy', href: '#' },
  { text: '$SALE', href: '#' },
];

const resourceLinks = [
  { text: 'Documentation', href: '#' },
  { text: 'Support Chat', href: '#' },
  { text: 'Marketing Service', href: '#' },
];

const socialLinks = [
  { type: 'document', href: '#' },
  { type: 'youtube', href: '#' },
  { type: 'telegram', href: '#' },
  { type: 'twitter', href: '#' },
  { type: 'discord', href: '#' },
];

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pb-10">
          <FooterColumn title="Products" links={productLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />
        </div>
        
        {/* Social links and copyright */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex space-x-8">
              {socialLinks.map((social, index) => (
                <SocialIcon key={index} type={social.type} href={social.href} />
              ))}
            </div>
            <div className="text-center text-gray-400 flex flex-col space-y-1">
              <p>© 2025 Dx Technologies</p>
              <p className="text-sm">All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;