import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-primary border-t border-white/10 text-center">
      <p className="text-textMuted text-sm font-mono">
        Designed & Built by <span className="text-accent">Rohan Shetty</span>
      </p>
      <p className="text-textMuted/60 text-xs mt-2">
        Built with React, TypeScript & Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;