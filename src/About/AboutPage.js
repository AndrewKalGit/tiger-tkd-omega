import React from "react";

function AboutPage(props) {
  return (
    <>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src={""}
                className="BannerContactIMG bg-gray-400 w-full object-cover h-[calc(100%)] lg:self-end lg:rounded-tl-[150px] lg:rounded-br-[150px]"
              />
            </div>

            <div class="lg:py-24">
              <h2 class="text-3xl font-bold sm:text-4xl">
                Welcome to Tiger’s Taekwondo Omega!
              </h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat eligendi corrupti iure commodi, necessitatibus
                praesentium expedita recusandae doloribus, amet laudantium
                minima nisi rerum temporibus eveniet ullam dignissimos facilis
                mollitia? Rem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
