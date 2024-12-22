import React from 'react';
import GlowingButton from '../shared/GlowingButton';

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 border-b border-lime-300/20 backdrop-blur-sm bg-black/60">
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="font-bold text-2xl tracking-wider text-lime-300 animate-pulse">
        De-Gen Diaries
      </h1>
      <GlowingButton>Connect Wallet</GlowingButton>
    </div>
  </header>
);

export default Header;