"use client"
import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
    const [nav, setNav] = React.useState(false);

    const links = [
        { id: 1, link: '/home', navName: "Home" },
        { id: 2, link: '/contact', navName: "Contact" },
    ];

    return (
        <div className="flex justify-between items-center w-full h-14 px-4 text-white bg-gray-800 nav">
            <div>
                <h1 className="text-3xl font-signature ml-2">
                    <Link className="link-underline link-underline-black" href="/home">
                        Logo
                    </Link>
                </h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link, navName }) => (
                    <li
                        key={id}
                        className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
                    >
                        <Link href={link}>{navName}</Link>
                    </li>
                ))}
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
            >
                {nav ? (
                    <>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </>
                ) : (
                    <>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </>
                )}
            </div>

            {
                nav && (
                    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                        {links.map(({ id, link, navName }) => (
                            <li
                                key={id}
                                className="px-4 cursor-pointer capitalize py-6 text-4xl"
                            >
                                <Link onClick={() => setNav(!nav)} href={link}>
                                    {navName}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )
            }
        </div >
    );
};
