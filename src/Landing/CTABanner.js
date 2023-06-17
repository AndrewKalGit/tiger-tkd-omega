import React from 'react';
import { Link } from 'react-router-dom'

function CTABanner(props) {
    return (
        <>
            <section className="bg-cta bg-[url('')] bg-gray-400">
                <div
                    class="mx-auto max-w-screen-xl px-4 py-20 lg:flex lg:items-center"
                >
                    <div class="mx-auto max-w-xl py-10 rounded-md text-center">
                    <div class="rounded-lg bg-opacity-60 md:bg-opacity-40">
                    <h1 class="text-4xl pt-10 px-4 text-gray-50 mt-40 sm:mt-20 font-extrabold sm:text-5xl">
                        Lorem. Ipsum. Dolor.
                    </h1>

                    <p class="mt-4 text-gray-50 px-8 font-medium text-lg sm:text-2xl/relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                    </p>

                    <div class="mt-8 pb-10 px-4 flex flex-wrap justify-center gap-4">
                        <Link
                        class="block w-full font-bold rounded border-gray-50 border-2 px-12 py-3 text-md text-gray-50 hover:text-opacity-90 focus:outline-none focus:ring hover:text-gray-100 active:bg-gray-50 sm:w-auto"
                        to="/Schedule"
                        >
                        View Schedule
                        </Link>
                    </div>
                    </div>
                    </div>
                </div>
            </section>  
        </>
    );
}

export default CTABanner;