'use client';

import { useEffect } from 'react';

const InitScripts = () => {
  useEffect(() => {
    // Make sure window is defined (client-side)
    if (typeof window !== 'undefined') {
      // Load jQuery first
      const loadJQuery = async () => {
        if (!(window as any).jQuery) {
          // Create and append jQuery script tag
          const script = document.createElement('script');
          script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
          script.async = true;
          
          // Create a promise that resolves when the script is loaded
          const jQueryLoaded = new Promise<void>((resolve) => {
            script.onload = () => resolve();
          });
          
          document.body.appendChild(script);
          await jQueryLoaded;
        }
        return true;
      };

      // Load Swiper
      const loadSwiper = async () => {
        if (!(window as any).Swiper) {
          // If Swiper isn't loaded from the CDN already
          try {
            const swiperModule = await import('swiper');
            return swiperModule.default;
          } catch (error) {
            console.error('Failed to load Swiper:', error);
            return null;
          }
        }
        return (window as any).Swiper;
      };

      const initSwiper = async () => {
        await loadJQuery();
        const Swiper = await loadSwiper();

        if (Swiper) {
          // Initialize clients slider
          if (document.querySelector('.mySwiper-ourclients-content')) {
            new Swiper(".mySwiper-ourclients-content", {
              slidesPerView: "auto",
              spaceBetween: 56,
              speed: 2000,
              loop: true,
              centeredSlides: true,
              freeMode: true,
              autoplay: {
                delay: 0,
                disableOnInteraction: 0,
              },
            });
          }

          // Initialize partnerships slider
          if (document.querySelector('.mySwiper-partnership')) {
            new Swiper(".mySwiper-partnership", {
              slidesPerView: 2.5,
              spaceBetween: 46,
              speed: 2000,
              loop: true,
              centeredSlides: true,
              autoplay: {
                delay: 0,
                disableOnInteraction: 0,
              },
              breakpoints: {
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
                },
                1025: {
                  slidesPerView: 6,
                },
              },
            });
          }

          // Initialize awards slider
          if (document.querySelector('.mySwiper-award')) {
            new Swiper(".mySwiper-award", {
              slidesPerView: 2.5,
              spaceBetween: 46,
              speed: 2000,
              loop: true,
              centeredSlides: true,
              autoplay: {
                delay: 0,
                disableOnInteraction: 0,
              },
              breakpoints: {
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
                },
                1025: {
                  slidesPerView: 6,
                },
              },
            });
          }
        }
      };

      initSwiper();
    }
  }, []);

  return null;
};

export default InitScripts;
