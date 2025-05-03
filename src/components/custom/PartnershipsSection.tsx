'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const PartnershipsSection: React.FC = () => {
  const swiperRef = useRef<HTMLDivElement>(null);

    const partners = [
    "/images/partner-1.svg",
    "/images/partner-2.svg",
    "/images/partner-3.svg",
    "/images/partner-4.svg",
    "/images/partner-5.svg",
    "/images/partner-6.svg",
    "/images/partner-7.svg",
    "/images/partner-8.svg",
    "/images/partner-9.svg",
    "/images/partner-10.svg",
    "/images/partner-11.svg",
    "/images/partner-12.svg",
    "/images/partner-13.svg",
    "/images/partner-14.svg",
    "/images/partner-15.svg"
  ];

  useEffect(() => {
    // Initialize Swiper for partnerships
    if (swiperRef.current) {
      const swiperInstance = new Swiper('.mySwiper-partnership', {
        modules: [Autoplay],
        slidesPerView: 2.5,
        spaceBetween: 46,
        speed: 2000,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
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

      return () => {
        swiperInstance.destroy();
      };
    }
  }, []);
    return (
    <section className="parntership-wrapper bg-[#1c1c1c] py-16">
            <div className="container mx-auto px-4">
        <h5 className="text-[#adadaa] text-xl font-semibold mb-8">Our Partnerships & Alliances</h5>
        <div className="swiper-main-wrapper">
          <div className="swiper mySwiper-partnership" ref={swiperRef}>
            <div className="swiper-wrapper">
              {partners.map((partner, index) => (
                <div key={index} className="swiper-slide">
                  <Image
                    src={partner}
                    alt={`Partner ${index + 1}`}
                    width={180}
                    height={80}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PartnershipsSection;
