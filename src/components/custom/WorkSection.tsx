'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type WorkCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  serviceName: string;
  serviceLogoSrc: string;
}

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  description,
  imageSrc,
  serviceName,
  serviceLogoSrc
}) => {
  return (
    <Link href={`/casestudy/${title.toLowerCase().replace(/\s+/g, '-')}`} className="card-wrapper block">
      <div className="ourwork-top-wrapper">
        <div className="ourwork-head-card-wrapper flex justify-between items-center">
          <div className="ourwork-logo-wrapper flex items-center">
            <Image
              src={serviceLogoSrc}
              alt={serviceName}
              width={25}
              height={25}
            />
            <h3 className="text-[#adadaa] text-lg font-semibold ml-2">{serviceName}</h3>
          </div>
          <Image
            src="/images/ourwork-rightarrow.svg"
            alt="Right arrow"
            width={24}
            height={24}
          />
        </div>
        <p className="text-[#9d9b95] text-base my-4">{description}</p>
      </div>
      <Image
        className="ourwork-image rounded-lg"
        src={imageSrc}
        alt={title}
        width={712}
        height={572}
      />
    </Link>
  );
};

const WorkSection: React.FC = () => {
  const projects = [
    {
      title: "Leading Bank Angular Transition",
      description: "Top U.S. Financial Organization Builds a Workforce with Expertise in Angular",
      imageSrc: "/images/casestudy-financial-services.webp",
      serviceName: "Pyramid Talent",
      serviceLogoSrc: "/images/talent-1.svg"
    },
    {
      title: "Bank RPA Processing",
      description: "Top U.S. Bank Uses RPA to Speed Processing of Loan Applications and Checks",
      imageSrc: "/images/casestudy-bank-rpa.webp",
      serviceName: "Celsior",
      serviceLogoSrc: "/images/celsior-1.svg"
    },
    {
      title: "Airline Talent Optimization",
      description: "Top U.S. Airline Builds a Talented Workforce and Optimizes Costs",
      imageSrc: "/images/casestudy-airline.webp",
      serviceName: "GenSpark",
      serviceLogoSrc: "/images/genspark-1.svg"
    }
  ];

  return (
    <section className="ourwork-main-wrapper bg-[#1c1c1c] py-16">
      <div className="container mx-auto px-4">
        <h5 className="text-[#adadaa] text-xl font-semibold mb-8">Our Work</h5>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <WorkCard
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                serviceName={project.serviceName}
                serviceLogoSrc={project.serviceLogoSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WorkSection;
