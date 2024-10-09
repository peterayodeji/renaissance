import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

function ProductViewMobile({ images, setZoomViewIndex }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="mx-auto w-[95vw] sm:w-[50vw]">
      <Swiper
        style={{
          '--swiper-navigation-color': 'transparent',
        }}
        navigation={true}
        loop={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mb-6 h-[500px] md:mb-8"
      >
        {/* use url for key later */}
        {images.map((img, index) => (
          <SwiperSlide key={index} onClick={() => setZoomViewIndex(index)}>
            <img src={img} alt="Product Image" className="mx-auto h-full" />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper h-[75px] w-[80%] px-2 sm:w-full sm:px-8 md:px-12"
      >
        {/* use url for key later */}
        {images.map((img, index) => (
          <SwiperSlide key={index} className="bg-white">
            <img
              src={img}
              alt="Product Image Thumbnail"
              className="mx-auto h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductViewMobile;
