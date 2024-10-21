'use client';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { NavLink } from '@/ui/NavLink';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15,
            },
        },
        closed: {
            x: '-100%',
            transition: {
                stiffness: 20,
                damping: 15,
            },
        },
    };

    return (
        <div className="text-white/90 pt-6">
            {/* Desktop Navbar */}
            <div className="hidden md:flex items-center justify-center px-4 py-2 mx-auto max-w-[400px]">
                <ul className="flex flex-row p-4 space-x-8">
                    {navLinks.map((link, index) => (
                        <li key={index} className="relative group">
                            <NavLink path={link.href} title={link.name} />
                            {/* Hover underline */}
                            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu Button */}
            <div
                onClick={toggleNav}
                className="md:hidden absolute top-5 right-5 border rounded text-white/90 border-white/70 p-2 z-50"
            >
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={nav ? 'open' : 'closed'}
                variants={menuVariants}
                className="fixed left-0 top-0 w-full h-screen z-40 bg-black/90 backdrop-blur-lg"
            >
                <ul className="text-4xl font-semibold my-24 text-center space-y-8 text-white/90">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.href} onClick={closeNav} className="hover:text-green-500">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};

export default Navbar;
