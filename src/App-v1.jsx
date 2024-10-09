import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': 'transparent',
        }}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mb-8 h-[400px] bg-white"
      >
        <SwiperSlide onClick={() => console.log('1')}>
          <img
            src="/vivienne-westwood-multicolor-stuart-sweater.webp"
            className="mx-auto h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/vivienne-westwood-multicolor-stuart-sweater.webp"
            className="mx-auto h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/vivienne-westwood-multicolor-stuart-sweater.webp"
            className="mx-auto h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/vivienne-westwood-multicolor-stuart-sweater.webp"
            className="mx-auto h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/vivienne-westwood-multicolor-stuart-sweater.webp"
            className="mx-auto h-full"
          />
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper bg-gree-400 h-[120px] px-8"
      >
        <SwiperSlide className="bg-white">
          <img
            src="/vivienne-westwood-multicolor-stuart-sweater.webp"
            className="mx-auto h-full"
          />
        </SwiperSlide>

        <SwiperSlide className="bg-white">
          <img
            src="/vivienne-westwood-multicolor-stuart-sweater.webp"
            className="mx-auto h-full"
          />
        </SwiperSlide>

        <SwiperSlide className="bg-white">
          <img
            src="/vivienne-westwood-multicolor-stuart-sweater.webp"
            className="mx-auto h-full"
          />
        </SwiperSlide>

        <SwiperSlide className="bg-white">
          <img
            src="/vivienne-westwood-multicolor-stuart-sweater.webp"
            className="mx-auto h-full"
          />
        </SwiperSlide>

        <SwiperSlide className="bg-white">
          <img
            src="/vivienne-westwood-multicolor-stuart-sweater.webp"
            className="mx-auto h-full"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
