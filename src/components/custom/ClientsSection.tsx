'use client';

import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const ClientsSection: React.FC = () => {
  const swiperRef = useRef<HTMLDivElement>(null);

    const clients = [
    "Top 3 U.S. banks",
    "A top 3 global technology company",
    "World's largest communications company",
    "Top 3 U.S. airlines",
    "4 of the top 5 P&C insurance providers",
    "A top 3 US pharmaceutical company",
    "5th largest retailer in the U.S.",
    "2 of the big 5 U.S. tech companies",
    "World's largest oil & gas company",
    "A top 5 global logistics provider",
    "World's leading diesel engine manufacturer",
    "A leading US non-profit hospital network"
  ];

  useEffect(() => {
    // Initialize Swiper for clients
    if (swiperRef.current) {
      const swiperInstance = new Swiper('.mySwiper-ourclients-content', {
        modules: [Autoplay],
        slidesPerView: 'auto',
        spaceBetween: 56,
        speed: 2000,
        loop: true,
        centeredSlides: true,
        freeMode: true,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
      });

      return () => {
        swiperInstance.destroy();
      };
    }
  }, []);
    return (
    <section className="ourclients-wrapper bg-[#1c1c1c] py-16">
            <div className="container mx-auto px-4">
        <h5 className="text-[#adadaa] text-xl font-semibold mb-8">Our Clients</h5>
        <div className="swiper-main-wrapper">
          <div className="swiper mySwiper-ourclients-content" ref={swiperRef}>
            <div className="swiper-wrapper">
              {clients.map((client, index) => (
                <div key={index} className="swiper-slide">
                  <p className="text-[#9d9b95] text-lg">{client}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
      </div>
    </section>
  );
};

export default ClientsSection;
