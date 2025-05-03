'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const AwardsSection: React.FC = () => {
  const swiperRef = useRef<HTMLDivElement>(null);

  const awards = [
    "/images/award-1.svg",
    "/images/award-2.svg",
    "/images/award-3.svg",
    "/images/award-4.svg",
    "/images/award-5.svg",
    "/images/award-6.svg",
    "/images/award-7.svg",
    "/images/award-8.svg",
    "/images/award-9.svg",
    "/images/award-10.svg"
  ];

  useEffect(() => {
    // Initialize Swiper for awards
    if (swiperRef.current) {
      const swiperInstance = new Swiper('.mySwiper-award', {
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
    <section className="awards-wrapper bg-[#1c1c1c] py-16">
      <div className="container mx-auto px-4">
        <h5 className="text-[#adadaa] text-xl font-semibold mb-8">Our Awards & Recognition</h5>
        <div className="swiper-main-wrapper">
          <div className="container">
            <div className="swiper mySwiper-award" ref={swiperRef}>
              <div className="swiper-wrapper">
                {awards.map((award, index) => (
                  <div key={index} className="swiper-slide">
                    <Image
                      src={award}
                      alt={`Award ${index + 1}`}
                      width={180}
                      height={80}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AwardsSection;
