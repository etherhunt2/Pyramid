'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = ({ title, description, videoSrc, posterSrc, logoSrc, overlayText }: {
  title: string;
  description: string;
  videoSrc: string;
  posterSrc: string;
  logoSrc: string;
  overlayText: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Effect to handle video play/pause on hover state change
  useEffect(() => {
    if (!videoRef.current) return;
    
    if (isHovered) {
      videoRef.current.play().catch(err => {
        console.log(`Error playing video: ${err}`);
      });
    } else {
      videoRef.current.pause();
    }
  }, [isHovered]);

  return (
    <div className="prod_cards mb-10 lg:mb-0">
      <div className="title_wrap">
        <Link href={`/${title.toLowerCase().replace(/\s+/g, '-')}`} className="head_wrap flex justify-between items-center">
          <h4 className="text-[#adadaa] text-xl font-semibold leading-[120%] tracking-[0.0125rem] mb-4 sm:text-lg sm:mb-2">
            {title}
          </h4>
          <Image
            src="/images/ourwork-rightarrow.svg"
            alt="Right arrow"
            width={24}
            height={24}
          />
        </Link>
        <p className="text-[#9d9b95] text-xl font-normal leading-[120%] tracking-[0.01875rem] mb-8 sm:text-base sm:mb-6">
          {description}
        </p>
      </div>

      <div
        className="prod_video h-[400px] overflow-hidden block relative rounded-lg border border-transparent sm:h-[315px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <video
          ref={videoRef}
          muted
          loop
          preload="none"
          poster={posterSrc}
          className="w-full h-[400px] object-cover rounded-lg sm:h-[315px]"
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        <div
          style={{ display: isHovered ? 'block' : 'none' }}
          className="floating_contents rounded-lg opacity-95 bg-[#150620] absolute bottom-0 h-[400px] w-full px-8 py-14 lg:py-6 md:py-12 sm:h-[315px] sm:py-10 sm:px-4 z-0"
        >
          <Image
            className="logo mb-10 relative z-2 lg:mb-6"
            src={logoSrc}
            alt={`${title} logo`}
            width={150}
            height={40}
          />
          <p className="text-[#9d9b95] text-lg font-normal leading-[120%] tracking-[0.01688rem] m-0 pretty-text sm:text-base">
            {overlayText}
          </p>
        </div>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Pyramid Talent",
      description: "Fast access to top talent, anywhere.",
      videoSrc: "https://pyramidci.com/wp-content/uploads/2024/04/1.mp4",
      posterSrc: "https://pyramidci.com/wp-content/uploads/2025/03/p-1-67d909d61dfff.webp",
      logoSrc: "https://pyramidci.com/wp-content/uploads/2024/07/talent.svg",
      overlayText: "With Pyramid Talent, you gain more than talent placement. You get a dedicated partner offering market-driven, customized solutions. Our global network ensures access to elite IT, engineering, and professional talent, backed by a culture of inclusion and continuous adaptation to your needs."
    },
    {
      title: "Celsior",
      description: "Innovate. Accelerate. Elevate.",
      videoSrc: "https://pyramidci.com/wp-content/uploads/2024/04/3.mp4",
      posterSrc: "https://pyramidci.com/wp-content/uploads/2025/03/p-3-67d909d472732.webp",
      logoSrc: "https://pyramidci.com/wp-content/uploads/2024/07/celsior.svg",
      overlayText: "With Celsior, you get ongoing innovation tailored to your changing technology requirements. Our tailored solutions across Data & AI, Digital Solutions, and Automation & Platforms enhance customer experiences, boost agility, and ensure fast market entry to drive long-term success."
    },
    {
      title: "GenSpark",
      description: "Empower today, excel tomorrow.",
      videoSrc: "https://pyramidci.com/wp-content/uploads/2024/04/2.mp4",
      posterSrc: "https://pyramidci.com/wp-content/uploads/2025/03/p-2-67d909d401914.webp",
      logoSrc: "https://pyramidci.com/wp-content/uploads/2024/07/genspark.svg",
      overlayText: "With GenSpark, you can bridge the widening global skills gap and elevate your workforce. Our custom training programs are tailored to your organization's unique needs for dynamic market adaptation and empower your teams to boost workforce capabilities, productivity, and resilience."
    }
  ];

  return (
    <section className="products__wrapper bg-[#1c1c1c] pb-[100px] sm:pb-5">
      <div className="container mx-auto px-4">
        <div className="row br pt-10 border-t border-[#343434] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;