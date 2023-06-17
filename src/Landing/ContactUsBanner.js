import React from 'react';
import { Link } from 'react-router-dom'

function ContactUsBanner(props) {
    return (
        <>
            <section
            class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center"
            >
                <div class="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div
                    class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
                    >
                    <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
                        Lorem, ipsum dolor sit amet!
                    </h2>

                    <p class="hidden text-gray-500 md:mt-4 md:block">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
                        tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et
                        fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt
                        duis.
                    </p>

                    <div class="mt-4 md:mt-8">
                        <Link
                        to="/contact"
                        class="inline-block rounded border-2 border-gray-900 bg-gray-50 px-12 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-50 focus:outline-none focus:ring focus:ring-blue-400"
                        >
                        Contact Us
                        </Link>
                    </div>
                    </div>
                </div>

                <img
                    alt=""
                    src={''}
                    className="BannerContactIMG bg-gray-400 w-full object-cover h-[calc(100%)] lg:self-end lg:rounded-tl-[150px] lg:rounded-br-[150px]"
                />
            </section>   
        </>
    );
}

export default ContactUsBanner;