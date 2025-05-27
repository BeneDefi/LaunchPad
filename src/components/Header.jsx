import React from 'react';

const Header = () => {
  return (
    <header className="py-8 text-center">
      <h1 className="text-4xl md:text-5xl font-bold">
        View the{' '}
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Trends
        </span>{' '}
        on DxSale
      </h1>
    </header>
  );
};

export default Header;
