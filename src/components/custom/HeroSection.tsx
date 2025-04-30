import React from 'react'
import { FaStar, FaRocket, FaBolt } from 'react-icons/fa'

const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-screen bg-gray-900 text-white overflow-hidden flex flex-col justify-center">
            {/* Grid Layout */}
            <div className="container mx-auto mt-20 md:mt-0 px-4 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Right Side: Title & Icons */}
                <div className="flex-1 flex flex-col items-start md:items-start">
                    {/* Icons */}
                    <div className="flex gap-4 mb-4">
                        <FaStar className="text-yellow-400 text-2xl" />
                        <FaRocket className="text-purple-400 text-2xl" />
                        <FaBolt className="text-blue-400 text-2xl" />
                    </div>
                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        <span className="block">SUPERCHARGE</span>
                        <span className="block">YOUR FUTURE WITH</span>
                    </h1>
                </div>
                {/* Left Side: Triangle (Desktop only) */}
                <div
                    className="absolute right-0 left-56 justify-center items-center hidden md:flex"
                    style={{ bottom: '10.5rem', zIndex: 0 }}
                >
                    {/* Gradient Triangle without base */}
                    <svg width="320" height="320" viewBox="0 0 220 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="triangleGradient" x1="150" y1="0" x2="150" y2="220" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FFD600" />
                                <stop offset="1" stopColor="#232323" />
                            </linearGradient>
                        </defs>
                        <path d="M 20 200 L 110 40 L 600 670" stroke="url(#triangleGradient)" strokeWidth="30" fill="none" />
                    </svg>
                </div>
            </div>
            {/* Below Grid: Talent, Tech & Training */}
            <div className="container mx-auto px-4 mt-0">
                <h2
                    className="text-3xl md:text-5xl font-semibold text-end text-purple-400"
                >
                    TALENT, TECH & TRAINING
                </h2>
                {/* Triangle for Mobile (below headline) */}
                <div className="flex bottom-0 justify-center items-center mt-6 md:hidden z-5">
                    <svg width="220" height="220" viewBox="0 0 220 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="triangleGradientMobile" x1="110" y1="0" x2="110" y2="420" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FFD600" />
                                <stop offset="1" stopColor="#232323" />
                            </linearGradient>
                        </defs>
                        <path d="M 20 200 L 110 40 L 200 370" stroke="url(#triangleGradientMobile)" strokeWidth="20" fill="none" />
                    </svg>
                </div>
            </div>
            <div className='flex justify-center w-full absolute bottom-[10px] md:bottom-[30px] left-0 right-0'>
                {/* स्क्रॉल डाउन एनिमेशन */}
                <div className="flex justify-center">
                    <div className="animate-bounce flex flex-col items-center border border-gray-50 rounded-full p-3 cursor-pointer">
                        {/* <span className="text-gray-300 mb-2">Scroll Down</span> */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-purple-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection 