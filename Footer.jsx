import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-sm text-gray-600 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-4 text-center">
          <span>Career advice</span>
          <span>Browse jobs</span>
          <span>Browse companies</span>
          <span>Salaries</span>
          <span>Indeed Events</span>
          <span>Work at WorkNest</span>
          <span>Countries</span>
          <span>About</span>
          <span>Help</span>
          <span>Job Safety Guide</span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-center">
          <span>© 2025 WorkNest</span>
          <span>Accessibility at WorkNest</span>
          <span>Privacy Centre and Ad Choices</span>
          <span>Terms</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
