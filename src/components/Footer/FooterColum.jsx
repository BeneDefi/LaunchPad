import React from 'react';

const FooterColumn = ({ title, links }) => {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-base font-medium text-white mb-2">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href={link.href} 
              className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;