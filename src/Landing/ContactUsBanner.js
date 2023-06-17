import React from 'react';
import { Link } from 'react-router-dom';
import kickMan from '../images/TKDMAN1.png';

function ContactUsBanner(props) {
    return (
        <>
            <section
            className="vh-100 overflow-hidden bg-gray-50 sm:grid xl:grid-cols-2 sm:items-center"
            >
                <div class="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div
                    class="vh-50 mx-auto max-w-2xl text-center ltr:sm:text-left rtl:sm:text-right"
                    >
                    <img class="mb-10" src={kickMan} alt="kickingMan"/>
                    <h2 class="text-3xl xl:text-left font-bold text-gray-900 md:text-5xl">
                        Lorem, ipsum dolor sit amet!
                    </h2>
                    <p class="mt-3 xl:text-left text-gray-700 md:mt-5 md:block">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper.
                    </p>
                
                    <p class="mt-3 xl:text-left text-gray-700 md:mt-5 md:block">                        
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper.
                    </p>

                    <div class="mt-20 md:mt-30 flex justify-center">
                        <Link
                        to="/contact"
                        class="rounded border-2 border-gray-900 bg-gray-50  px-12 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-50 focus:outline-none focus:ring focus:ring-blue-400"
                        >
                        Contact Us
                        </Link>
                    </div>
                    </div>
                </div>

                <img
                    alt=""
                    src={''}
                   className="bg-gray-400 object-cover mb-40 xl:mr-10 vh-75 xl:self-end xl:rounded-tl-[150px] xl:rounded-br-[150px]"
                />
            </section>   
        </>
    );
}

export default ContactUsBanner;