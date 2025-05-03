'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
type NewsEvent = {
  id: string;
  title: string;
  type: 'news';
  description: string;
  slug: string;
  imageSrc: string;
}
const NewsEventCard: React.FC<{ item: NewsEvent }> = ({ item }) => {
  const { title, type, description, slug, imageSrc } = item;
  return (
    <div className="event-cards">
      <div className="event-top">
        <div className="top-content">
          <div className="top-heading flex justify-between items-center">
            <h6 className="text-[#9d9b95] text-sm uppercase">{type}</h6>
            <Link href={`/news/${slug}`}>
              <Image
                src="/images/explore.svg"
                alt="View more"
                width={24}
                height={24}
              />
            </Link>
          </div>
          <h5 className="text-[#ddddda] text-xl font-semibold my-4">{title}</h5>
        </div>
        <div className="bottom-content">
          <p className="text-[#c8c6c2] text-lg font-normal leading-[140%] tracking-[0.27px] mb-0">
            {description}
          </p>
          <Link href={`/news/${slug}`} className="btn_know relative inline-block -bottom-9">
            <span className="inline-block pr-10 text-[#fefcf4] text-xl font-medium leading-[120%] tracking-[-0.2px]">
              Learn More
            </span>
          </Link>
        </div>
      </div>
      <div className="event-bottom">
        <Image
          src={imageSrc}
          alt={title}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

const NewsEventsSection = () => {
  const newsEvents: NewsEvent[] = [
    {
      id: '1',
      title: "SBTi Validates Pyramid Consulting's Near-term Science-based Targets",
      type: 'news',
      description: "Driving sustainability forward with science-based targets.",
      slug: "sbti-validates-pyramid-consultings-near-term-science-based-targets",
      imageSrc: "/images/news-1.webp"
    },
    {
      id: '2',
      title: "Sanjeev Tirath Named to the 2025 Staffing 100 North America by Staffing Industry Analysts",
      type: 'news',
      description: "The list recognizes leaders whose impact and achievements drive the workforce solutions ecosystem.",
      slug: "sanjeev-tirath-named-to-the-2025-staffing-100-north-america-by-staffing-industry-analysts",
      imageSrc: "/images/news-2.webp"
    },
    {
      id: '3',
      title: "Pyramid Consulting, Inc. and Boomi Partner to Accelerate Data Integration and Digital Transformation",
      type: 'news',
      description: "This partnership ensures that our clients receive the most advanced and efficient solutions available in today's fast-evolving technological landscape.",
      slug: "pyramid-consulting-inc-and-boomi-forge-strategic-partnership-to-accelerate-data-integration-and-digital-transformation-for-enterprises",
      imageSrc: "/images/news-3.webp"
    },
    {
      id: '4',
      title: "GenSpark Trainees Shine in Microsoft Innovation Challenge Hackathon",
      type: 'news',
      description: "Our team of GenSpark trainees earned third place for their legal tech solution TUSK.",
      slug: "genspark-trainees-shine-in-microsoft-innovation-challenge-hackathon",
      imageSrc: "/images/news-4.webp"
    }
  ];

  return (
    <section className="news-and-events-wrapper py-20 bg-[#1c1c1c]">
      <div className="container mx-auto px-4">
        <div className="news-head-wrapper flex justify-between items-center mb-10">
          <h4 className="text-[#adadaa] text-2xl font-semibold">News & Events</h4>
          <Link href="/resources" className="btn_all">
            <span className="text-[#adadaa] text-lg">All Resources</span>
          </Link>
        </div>

        <div className="events-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {newsEvents.map((item) => (
              <div key={item.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
                <NewsEventCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default NewsEventsSection;
