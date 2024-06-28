import React from 'react';
import { PhoneIcon, AtSymbolIcon, GlobeAltIcon } from '@heroicons/react/solid';

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner mt-8 p-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Sekcja lewa - Certyfikat i informacje o firmie */}
        <div className="text-left">
          <h2 className="text-xl font-black text-blue-900 font-sans">CERTYFIKAT</h2>
          <p className="text-sm text-gray-500 font-sans">FIRMA WIELOBRANŻOWA EWA STEFANIAK-PIASEK</p>
        </div>

        {/* Sekcja prawa - Ikonki z danymi kontaktowymi */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <PhoneIcon className="h-6 w-6 text-blue-900" />
            <span className="text-gray-700 text-sm ml-2">+48 508 399 556</span>
          </div>
          <div className="flex items-center">
            <AtSymbolIcon className="h-6 w-6 text-blue-900" />
            <span className="text-gray-700 text-sm ml-2">certyfikat.edu@gmail.com</span>
          </div>
          <div className="flex items-center">
            <GlobeAltIcon className="h-6 w-6 text-blue-900" />
            <a href="http://www.certyfikat.org.pl" className="text-blue-500 hover:text-blue-600 text-sm ml-2">www.certyfikat.org.pl</a>
          </div>
          <div className="flex items-center">
            <a href="https://www.facebook.com/ewa.piasek.9" target="_blank" rel="noopener noreferrer" className="block text-blue-900 hover:text-blue-600 transition duration-300 ease-in-out">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.656c0-3.025 1.785-4.668 4.512-4.668 1.312 0 2.686 0.235 2.686 0.235v2.953h-1.513c-1.491 0-1.953 0.922-1.953 1.863v2.273h3.328l-0.532 3.469h-2.796v8.385c5.737-0.9 10.125-5.864 10.125-11.854z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
