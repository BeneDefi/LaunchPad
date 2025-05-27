import React from 'react';
import { FileText, Youtube, Send, Twitter, Disc as Discord } from 'lucide-react';

const SocialIcon = ({ type, href }) => {
  const getIcon = () => {
    switch (type) {
      case 'document':
        return <FileText size={20} />;
      case 'youtube':
        return <Youtube size={20} />;
      case 'telegram':
        return <Send size={20} />;
      case 'twitter':
        return <Twitter size={20} />;
      case 'discord':
        return <Discord size={20} />;
      default:
        return null;
    }
  };

  return (
    <a 
      href={href}
      className="text-gray-400 hover:text-white transition-colors duration-200"
      target="_blank"
      rel="noopener noreferrer"
    >
      {getIcon()}
    </a>
  );
};

export default SocialIcon;