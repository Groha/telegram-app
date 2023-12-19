import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function Product() {
  const product = {
    title: "What is Lorem Ipsum?",
    descr:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: "../assets/images/1.jpeg",
    price: "4000 uah",
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-10">
        <span className="font-bold uppercase px-2 py-1 rounded bg-slate-500 text-white">
          {product.price}
        </span>
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-slate-500"
          >
            <path d="M17.026 22.957c10.957-11.421-2.326-20.865-10.384-13.309l2.464 2.352h-9.106v-8.947l2.232 2.229c14.794-13.203 31.51 7.051 14.794 17.675z" />
          </svg>
        </Link>
      </div>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-5"
      >
        <SwiperSlide>
          <div className="w-full pb-[56.25%] relative mb-6">
            <img
              src="../assets/images/1.jpeg"
              alt=""
              className="w-full h-full object-cover object-center absolute inset-0"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full pb-[56.25%] relative mb-6">
            <img
              src="../assets/images/1.jpeg"
              alt=""
              className="w-full h-full object-cover object-center absolute inset-0"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full pb-[56.25%] relative mb-6">
            <img
              src="../assets/images/1.jpeg"
              alt=""
              className="w-full h-full object-cover object-center absolute inset-0"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full pb-[56.25%] relative mb-6">
            <img
              src="../assets/images/1.jpeg"
              alt=""
              className="w-full h-full object-cover object-center absolute inset-0"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full pb-[56.25%] relative mb-6">
            <img
              src="../assets/images/1.jpeg"
              alt=""
              className="w-full h-full object-cover object-center absolute inset-0"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <p className="text-justify mb-4">{product.descr}</p>
    </div>
  );
}
