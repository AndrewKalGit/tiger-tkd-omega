import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <>
            <header class="bg-white">
                <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                    <div class="flex h-20 items-center justify-between">
                    <div class="md:flex md:items-center md:gap-12">
                        <Link to="/">
                        <span class="sr-only">Home</span>
                            <path>
                                <img class='h-24' src={'https://tigers-tkd-omega.s3.amazonaws.com/logo.png'} alt="logo"/>  
                            </path>
                        </Link>
                    </div>

                    <div class="hidden md:block">
                        <nav aria-label="Global">
                        <ul class="flex items-center gap-24 text-md">
                            <li>
                            <Link
                                class="font-medium text-gray-900 transition hover:text-gray-700/75"
                                to="/"
                            >
                                Home
                            </Link>
                            </li>

                            <li>
                            <Link
                                 class="font-medium text-gray-900 transition hover:text-gray-700/75"
                                 to="/about"
                            >
                                About
                            </Link>
                            </li>

                            <li>
                            <Link
                                 class="font-medium text-gray-900 transition hover:text-gray-700/75"
                                 to="/schedule"
                            >
                                Schedule
                            </Link>
                            </li>
                        </ul>
                        </nav>
                    </div>

                    <div class="flex items-center gap-4">
                        <div class="sm:flex sm:gap-4">
                        <Link
                            class="rounded-md bg-gray-50 px-5 py-2.5 text-sm font-medium text-gray-900 border-2 border-gray-900 shadow"
                            to="/contact"
                        >
                            Contact
                        </Link>
                        </div>

                        <div class="block md:hidden">
                        <button
                            class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            </svg>
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Nav;