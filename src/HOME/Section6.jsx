import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import img1 from "../assets/team-img1.jpg";
import img2 from "../assets/team-img2.jpg";
import img3 from "../assets/team-img3.jpg";

function Section6() {
  const cards = [
    {
      baseImg: img1,
      description:
        "HiCARES provided exceptional care and support for my family. Their caregivers were compassionate, professional, and always treated us with kindness.",
      name: "Sarah Mitchell",
      title: "Family Member",
    },
    {
      baseImg: img2,
      description:
        "The team made my recovery at home comfortable and stress-free. I truly appreciated their dedication and personalized care.",
      name: "James Peterson",
      title: "Client",
    },
    {
      baseImg: img3,
      description:
        "From the very first visit, HiCARES exceeded our expectations. Their caregivers treated my mother with dignity and respect every day.",
      name: "Linda Carter",
      title: "Family Member",
    },
    {
      baseImg: img1,
      description:
        "HiCARES provided exceptional care and support for my family. Their caregivers were compassionate, professional, and always treated us with kindness.",
      name: "Sarah Mitchell",
      title: "Family Member",
    },
    {
      baseImg: img2,
      description:
        "The team made my recovery at home comfortable and stress-free. I truly appreciated their dedication and personalized care.",
      name: "James Peterson",
      title: "Client",
    },
    {
      baseImg: img3,
      description:
        "From the very first visit, HiCARES exceeded our expectations. Their caregivers treated my mother with dignity and respect every day.",
      name: "Linda Carter",
      title: "Family Member",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-24 pt-20 h-auto pb-10 px-[20px]">

        <h1 className="lg:text-[50px] text-[30px] font-semibold  text-center lg:text-start flex lg:justify-center justify-start">What Investors Say About Us</h1>
        <p className="lg:text-[18px] text-[15px] font-bold text-gray-500 lg:w-160 text-center pt-2 mx-auto">Investors praise our transparent approach, personalized guidance, and
  user-friendly platform. At HiCARES, their trust is our greatest endorsement.</p>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        className="max-w-7xl mx-auto px-6"
      >
        {cards.map((card, i) => (
          <SwiperSlide key={i}>
            <div className="relative mx-auto mt-16 flex h-[420px] flex-col justify-center rounded-3xl border border-gray-200 bg-white px-8 py-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

              {/* Floating Image */}
              <div className="absolute left-1/2 top-[-40px] -translate-x-1/2">
                <img
                  src={card.baseImg}
                  alt={card.name}
                  className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-lg"
                />
              </div>

              {/* Stars */}
              <div className="mt-4 flex justify-center text-2xl text-[#F4B942]">
                ★★★★★
              </div>

              {/* Quote */}
              <div className="mt-2 text-6xl font-bold text-[#2EC4B6] leading-none">
                “
              </div>

              {/* Description */}
              <p className="mt-4 text-[16px] leading-8 text-gray-600">
                {card.description}
              </p>

              {/* Name */}
              <h3 className="mt-8 text-xl font-bold text-[#1E3A5F]">
                {card.name}
              </h3>

              {/* Title */}
              <p className="mt-1 text-sm font-medium text-[#2EC4B6]">
                {card.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Section6;