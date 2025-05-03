'use client';
import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// SVG Icons for social media
const LinkedInIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/>
  </svg>
);

const FacebookIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
  </svg>
);

const InstagramIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/>
  </svg>
);

const TwitterIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"/>
  </svg>
);

const FooterSection: React.FC = () => {
  return (
    <>
      {/* Sub-Footer Section */}
      <section className="bg-gray-900 py-10 text-gray-300">
        <div className="container mx-auto px-4">
          <div className="main-sub-footer-wrapper">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Social Media Icons */}
              <div className="md:col-span-2 flex flex-col">
                <ul className="home-sub-footer-logos flex space-x-4 md:space-x-0 md:flex-col md:space-y-4">
                  <li>
                    <a href="https://www.linkedin.com/company/pyramid-consulting" className="text-gray-400 hover:text-blue-500 transition-colors" target="_blank" rel="noopener noreferrer">
                      <LinkedInIcon />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/PyramidConsultingInc" className="text-gray-400 hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
                      <FacebookIcon />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/pyramidciglobal/" className="text-gray-400 hover:text-pink-600 transition-colors" target="_blank" rel="noopener noreferrer">
                      <InstagramIcon />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/PyramidCiGlobal" className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                      <TwitterIcon />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Services Links */}
              <div className="md:col-span-2 md:col-start-5">
                <div className="unlist-sub-wrapper">
                  <h2 className="text-lg font-semibold mb-4 text-white">Services</h2>
                  <ul className="unlist-service space-y-2">
                    <li className="list-service-item">
                      <a href="https://pyramidci.com/talent-home-page/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        Pyramid Talent
                      </a>
                    </li>
                    <li className="list-service-item">
                      <a href="https://celsiortech.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        Celsior
                      </a>
                    </li>
                    <li className="list-service-item">
                      <a href="https://genspark.net/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        GenSpark
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Resources Link */}
              <div className="md:col-span-2 md:col-start-8">
                <div className="unlist-sub-wrapper">
                  <h2 className="text-lg font-semibold mb-4 text-white">
                    <a href="https://pyramidci.com/resources/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
                      Resources
                    </a>
                  </h2>
                </div>
              </div>

              {/* Mobile Accordion (hidden on desktop) */}
              <div className="mobile-view md:hidden w-full">
                <div className="accordion mt-8" id="accordionFlushExample">
                  <div className="accordion-item border-b border-gray-700 pb-4">
                    <h2 className="accordion-header text-lg font-semibold mb-2">
                      <button
                        className="accordion-button bg-transparent text-white w-full text-left py-2"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne0"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne0"
                      >
                        Services
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne0"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne0"
                    >
                      <div className="accordion-body pt-2">
                        <ul className="space-y-3">
                          <li>
                            <a href="https://pyramidci.com/talent-home-page/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                              Pyramid Talent
                            </a>
                          </li>
                          <li>
                            <a href="https://celsiortech.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                              Celsior
                            </a>
                          </li>
                          <li>
                            <a href="https://genspark.net/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                              GenSpark
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-b border-gray-700 py-4">
                    <h2>
                      <a href="https://pyramidci.com/resources/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
                        Resources
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer Section */}
      <footer className="bg-gray-950 py-8 text-gray-400">
        <div className="container mx-auto px-4">
          <div className="top-wrapper flex flex-col md:flex-row justify-between mb-8">
            {/* Logo Section */}
            <div className="logos-wrapper mb-6 md:mb-0">
              <a href="https://pyramidci.com" className="inline-block mb-6">
                <img 
                  src="https://pyramidci.com/wp-content/uploads/2024/07/Frame-1973341810-1.svg" 
                  alt="Pyramid Consulting" 
                  width="164"
                  height="32"
                />
              </a>
              <ul className="logos-bottom-wrapper flex flex-wrap gap-4">
                <li>
                  <a href="https://pyramidci.com/talent-home-page/" target="_blank" rel="noopener noreferrer">
                    <img 
                      className="gray-logo" 
                      src="https://pyramidci.com/wp-content/uploads/2024/07/Frame-1973341806.svg" 
                      alt="Pyramid Talent" 
                      width="97"
                      height="30"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://celsiortech.com/" target="_blank" rel="noopener noreferrer">
                    <img 
                      className="gray-logo" 
                      src="https://pyramidci.com/wp-content/uploads/2024/07/Frame-1973341807.svg" 
                      alt="Celsior" 
                      width="81"
                      height="30"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://genspark.net/" target="_blank" rel="noopener noreferrer">
                    <img 
                      className="gray-logo" 
                      src="https://pyramidci.com/wp-content/uploads/2024/07/Frame-1973341808.svg" 
                      alt="GenSpark" 
                      width="104"
                      height="29"
                    />
                  </a>
                </li>
              </ul>
            </div>

            {/* Links Section */}
            <div className="content-wrapper">
              <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
                <li>
                  <a href="https://pyramidci.com/about-us/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="https://pyramidci.com/resources/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="https://pyramidci.com/career-overview/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="https://pyramidci.com/contact-us/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="bottom-wrapper text-xs border-t border-gray-800 pt-6 flex flex-col space-y-3">
            <span className="flex flex-wrap gap-x-2 gap-y-1">
              <a href="https://pyramidci.com/wp-content/uploads/2024/08/GDPR-v1-6-072024.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                GDPR
              </a>
              |
              <a href="https://pyramidci.com/wp-content/uploads/2024/08/CCPA-CRA-v1-3-072024.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                CCPA/CCRA
              </a>
              |
              <a href="https://pyramidci.com/wp-content/uploads/2024/08/Privacy-Policy-Introduction-v2-072024.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </a>
              |
              <a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                Microsoft privacy statement
              </a>
            </span>
            <span className="flex flex-wrap gap-x-2 gap-y-1">
              <a href="https://pyramidci.com/wp-content/uploads/2024/08/Web-Accessibility-v1-2-072024.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                Web accessibility
              </a>
              |
              <a href="https://pyramidci.com/wp-content/uploads/2024/08/Privacy-Policy-Introduction-v2-072024.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                Privacy introduction
              </a>
              |
              <span>© 2025 Pyramid Consulting, Inc. | All rights reserved</span>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;