import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Pagination, Navigation]);

const mockData = [
  {
    id: 1,
    stars: 5,
    date: new Date(2022, 2, 2),
    author: "Person Person",
    review: "It was cool yes it was so cool",
  },
  {
    id: 2,
    stars: 3,
    date: new Date(2023, 1, 3),
    author: "Person Person",
    review: "It was cool yes it was so cool",
  },
  {
    id: 3,
    stars: 4,
    date: new Date(),
    author: "Person Person",
    review: "It was cool yes it was so cool",
  },
];

function Testimonial() {
  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <span key={i} className="text-yellow-500">
          ★
        </span>
      );
    }
    return stars;
  };

  const formatReviewDate = (date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const diffInTime = today.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
    const diffInWeeks = Math.floor(diffInDays / 7);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInDays / 365);

    if (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      return (
        <>
          Today
          <span className="text-sm font-semibold text-white px-2 py-1">
            NEW
          </span>
        </>
      );
    } else if (
      date.getDate() === yesterday.getDate() &&
      date.getMonth() === yesterday.getMonth() &&
      date.getFullYear() === yesterday.getFullYear()
    ) {
      return (
        <>
          Yesterday
          <span className="text-sm font-semibold text-white px-2 py-1">
            NEW
          </span>
        </>
      );
    } else if (diffInDays < 7) {
      return (
        <>
          {diffInDays} {diffInDays === 1 ? "day" : "days"} ago
          {diffInDays <= 7 && (
            <span className="text-sm font-semibold text-white px-2 py-1">
              NEW
            </span>
          )}
        </>
      );
    } else if (diffInWeeks < 5) {
      return (
        <>
          {diffInWeeks} {diffInWeeks === 1 ? "week" : "weeks"} ago
          {diffInWeeks <= 4 && (
            <span className="text-sm font-semibold text-white px-2 py-1">
              NEW
            </span>
          )}
        </>
      );
    } else if (diffInMonths < 12) {
      return `${diffInMonths} ${diffInMonths === 1 ? "month" : "months"} ago`;
    } else {
      return `${diffInYears} ${diffInYears === 1 ? "year" : "years"} ago`;
    }
  };

  return (
    <section className="photos-section flex flex-col gap-14 md:m-20 m-4">
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
          className="h-96 w-full"
          style={{
            "--swiper-pagination-color": "#000080",
            "--swiper-pagination-bullet-inactive-color": "#D9D9D9",
          }}
        >
          {mockData.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="flex justify-center items-center h-full">
                <div className="bg-[#01519B] text-white p-6 rounded-3xl gap-8 rounded-br-[75px] flex flex-col items-center md:w-1/2 w-full m-auto h-2/3">
                  <div className="flex gap-4">
                    <div className="flex items-center mb-4">
                      {renderStars(review.stars)}
                    </div>
                    <div className="mb-4">{formatReviewDate(review.date)}</div>
                  </div>
                  <div className="text-center">
                    <p className="text-xl">{review.review}</p>
                    <div className="text-xl">-{review.author}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;
