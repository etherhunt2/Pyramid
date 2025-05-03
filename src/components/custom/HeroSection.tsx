'use client';
import React from 'react';
import Image from 'next/image';
import design from '@/../public/images/home-banner-pattern.svg'


const HeroSection: React.FC = () => {
  return (
    <section className="banner__wrapper bg-[#1c1c1c] pt-[168px] pb-[92px] overflow-hidden lg:pt-[168px] lg:pb-[92px] md:pt-[140px] md:pb-[70px] sm:pt-[108px] sm:pb-[220px]">
      <div className="container mx-auto px-4">
        <div className="box_icon flex sm:text-center" id="box_icon">
          <Image
            src="https://pyramidci.com/wp-content/themes/pyramid-consulting/assets/img/home/banner/talent-home.svg"
            alt="Talent icon"
            width={32}
            height={32}
            className="h-8 w-8 mr-6 last:mr-0"
          />
          <Image
            src="https://pyramidci.com/wp-content/themes/pyramid-consulting/assets/img/home/banner/Celsior-home.svg"
            alt="Celsior icon"
            width={32}
            height={32}
            className="h-8 w-8 mr-6 last:mr-0"
          />
          <Image
            src="https://pyramidci.com/wp-content/themes/pyramid-consulting/assets/img/home/banner/GenSpark-home.svg"
            alt="GenSpark icon"
            width={32}
            height={32}
            className="h-8 w-8 mr-6 last:mr-0"
          />
        </div>

        <div className="contents mt-7 relative">
          <h2
            id="title_1"
            className="title text-[#ddddda] text-4xl sm:text-2xl lg:text-4xl font-extrabold leading-none tracking-[-2px] sm:tracking-[2px] uppercase mb-6 sm:mb-2.5 md:text-left sm:text-center"
          >
            SUPERCHARGE
          </h2>

          <h2
            id="title_2"
            className="title text-[#ddddda] text-4xl sm:text-2xl lg:text-4xl font-extrabold leading-none tracking-[-2px] sm:tracking-[2px] uppercase mb-6 sm:mb-2.5 md:text-left sm:text-center"
          >
            your future with
          </h2>

          <h2
            id="title_3"
            className="text-4xl sm:text-2xl lg:text-4xl font-extrabold uppercase leading-none md:text-right sm:text-center bg-gradient-to-br from-[#bcb8ff] via-[#625da9] to-[#393562] bg-clip-text text-transparent tracking-[-2px] sm:tracking-[2px] m-0"
          >
            talent, technology & training
          </h2>

          <Image
            src={design.src}
            alt="Background pattern"
            width={614}
            height={614}
            layout="intrinsic"
            style={{ width: '614px', height: '614px' }}
            className="absolute z-10 bottom-[-10] right-0 md:top-[150px] md:right-[100px] sm:top-[220px] sm:right-0 sm:w-[366px] sm:h-auto"
          />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
