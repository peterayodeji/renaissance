import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductDisplay from '../products/ProductDisplay';

function NewArrivalsList({ newArrivalsItems }) {
  return (
    <div className="relative">
      <Swiper
        className="grid"
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView="auto"
        centeredSlides={true}
        loop={true}
        navigation={{
          nextEl: '.custom-next', // Custom next arrow
          prevEl: '.custom-prev', // Custom previous arrow
        }}
        pagination={{
          el: '.swiper-pagination', // Progress bar pagination
          type: 'progressbar', // Progress bar type, not dots
        }}
        breakpoints={{
          768: {
            spaceBetween: 10,
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {newArrivalsItems.map(item => (
          <SwiperSlide
            key={item.id}
            className="flex w-[200px] items-end sm:w-[250px]"
          >
            <ProductDisplay product={item} />
          </SwiperSlide>
        ))}

        {/* Custom navigation buttons */}
        <div className="custom-prev">
          <img src="/arrow-left.svg" alt="Left Arrow" className="h-5" />
        </div>
        <div className="custom-next">
          <img src="/arrow-right.svg" alt="Right Arrow" className="h-5" />
        </div>
      </Swiper>

      {/* Pagination progress bar */}
      <div className="swiper-pagination"></div>
    </div>
  );
}

export default NewArrivalsList;
