'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import CounterAnimation from './CounterAnimation';
import '@/styles/turningProblems.css';

const TurningProblemsSection: React.FC = () => {
    const [isImgVisible, setIsImgVisible] = useState(false);
    const stats = [
        { value: 3, label: 'Decades', suffix: '' },
        { value: 125, label: 'Fortune 500 clients', suffix: '+' },
        { value: 5, label: 'Continents', suffix: '' },
        { value: 25, label: 'Countries', suffix: '+' },
        { value: 6500, label: 'Consultants', suffix: '+' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const itemsImg = document.querySelector('.items_img');
            if (itemsImg && !isImgVisible) {
                const rect = itemsImg.getBoundingClientRect();
                const bottomOfObject = rect.top + rect.height / 2;
                const bottomOfWindow = window.scrollY + window.innerHeight;

                if (bottomOfWindow > bottomOfObject + 20) {
                    setIsImgVisible(true);
                    itemsImg.classList.add('imgShow');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on initial load

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isImgVisible]);

    return (
        <section className="bg-gray-900 py-20 text-white">
            <div className="container mx-auto px-4">
                <div className="turnig-wrapper">
                    <div className="turing_flex flex flex-col md:flex-row items-center justify-between">
                        <div className="items_img mr-0 md:mr-8 transition-all duration-700 opacity-0 mb-8 md:mb-0 md:w-1/3 flex justify-center">
                            {/* <Image
                                src="/images/home-banner-pattern.svg"
                                alt="Pattern"
                                width={300}
                                height={300}
                            /> */}
                            <Image
                                src="/images/home-banner-pattern.svg"
                                alt="Background pattern"
                                width={614}
                                height={614}
                                layout="intrinsic"
                                style={{ width: '814px', height: '814px' }}
                            />
                        </div>
                        <div className="items md:w-1/2 text-center md:text-left">
                            <h2 className="text-4xl font-bold mb-8">
                                Turning Problems into Possibilities
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Stats section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold mb-10 text-center">Pyramid Consulting by the Numbers</h2>

                    <div className="flex_counter grid grid-cols-2 md:grid-cols-5 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="counter text-center">
                                <div className="flex_count flex justify-center">
                                    <h2 className="counterTxt text-4xl md:text-5xl font-bold text-white mb-1">
                                        <CounterAnimation end={stat.value} className="inline-block" />
                                    </h2>
                                    {stat.suffix && <span className="text-4xl md:text-5xl font-bold text-white">{stat.suffix}</span>}
                                </div>
                                <p className="text-gray-400">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Company description */}
                <div className="pyramid-bottom-wrapper mt-12">
                    <div className="row flex flex-col md:flex-row items-center md:space-x-8">
                        <div className="col-12 md:w-1/2 mb-8 md:mb-0">
                            <p className="text-gray-300 leading-relaxed">
                                Pyramid Consulting, Inc. is a global leader in workforce and technology solutions that helps clients navigate competitive and challenging markets. Its award-winning family of brands — Pyramid Talent, Celsior, and GenSpark — operate together to deliver seamless integrated solutions through multiple delivery models across five continents and 25+ countries. Founded in 1996 and headquartered in Atlanta, Pyramid Consulting serves 125+ Fortune 500 companies across all major industries by engaging 6500+ consultants.
                            </p>
                        </div>
                        <div className="col-12 md:w-1/3 md:ml-auto flex justify-center">
                            <div className="pyramid-consultant-logos-wrapper">
                                <div className="pyramid-main-logos-wrapper">
                                    <img
                                        src="https://pyramidci.com/wp-content/smush-webp/2024/07/PCI_Stack_white-1.png.webp"
                                        alt="Pyramid Consulting Logos"
                                        className="max-w-full h-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TurningProblemsSection;