import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Pagination, Navigation } from "swiper";

const mockData = [
  {
    id: 1,
    stars: 5,
    date: new Date(),
    author: "Person Person",
    review: "It was cool yes it was so cool",
  },
  {
    id: 2,
    stars: 5,
    date: new Date(),
    author: "Person Person",
    review: "It was cool yes it was so cool",
  },
  {
    id: 3,
    stars: 5,
    date: new Date(),
    author: "Person Person",
    review: "It was cool yes it was so cool",
  },
];

function Testimonial(props) {
  return (
    <section className="photos-section flex flex-col gap-14 md:m-20 m-12">
      <h2 className="text-4xl text-center">Testimonials</h2>
      <div className="flex justify-center">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          slidesPerView={1}
          modules={[Pagination, Navigation]}
          className="h-96 object-contain w-full relative"
        >
          {mockData.map((review) => (
            <SwiperSlide className="p-14 flex m-auto" key={review}>
              <div>Hi!</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;
