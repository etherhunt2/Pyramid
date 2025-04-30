import React from 'react'
import Link from 'next/link'
import { Logo } from '@/components/Logo/Logo'

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white py-4 px-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Logo />
                </div>

                <div className="hidden md:flex space-x-8">
                    <NavLink href="/services">Services</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/work">Our Work</NavLink>
                    <NavLink href="/news">News</NavLink>
                    <NavLink href="/contact">Contact Us</NavLink>
                </div>

                <button className="md:hidden flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </nav>
    )
}

const NavLink: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => {
    return (
        <Link
            href={href}
            className="relative py-2 px-1 font-medium transition-colors duration-300 hover:text-purple-400 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full"
        >
            {children}
        </Link>
    )
}

export default Navbar 