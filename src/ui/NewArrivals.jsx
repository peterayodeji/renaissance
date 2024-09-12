import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ITEMS = [
  {
    id: '001',
    name: 'Vienne Multi-color Sweater',
    price: '$50.00',
    image: '/vivienne-westwood-multicolor-stuart-sweater.webp',
  },
  {
    id: '002',
    name: 'Vienne Multi-color Sweater',
    price: '$50.00',
    image: '/vivienne-westwood-multicolor-stuart-sweater.webp',
  },
  {
    id: '003',
    name: 'Vienne Multi-color Sweater',
    price: '$50.00',
    image: '/vivienne-westwood-multicolor-stuart-sweater.webp',
  },
  {
    id: '004',
    name: 'Vienne Multi-color Sweater',
    price: '$50.00',
    image: '/vivienne-westwood-multicolor-stuart-sweater.webp',
  },
  {
    id: '005',
    name: 'Vienne Multi-color Sweater',
    price: '$50.00',
    image: '/vivienne-westwood-multicolor-stuart-sweater.webp',
  },
  {
    id: '006',
    name: 'Vienne Multi-color Sweater',
    price: '$50.00',
    image: '/vivienne-westwood-multicolor-stuart-sweater.webp',
  },
  {
    id: '007',
    name: 'Vienne Multi-color Sweater',
    price: '$50.00',
    image: '/vivienne-westwood-multicolor-stuart-sweater.webp',
  },
  {
    id: '008',
    name: 'Vienne Multi-color Sweater',
    price: '$50.00',
    image: '/vivienne-westwood-multicolor-stuart-sweater.webp',
  },
];

function NewArrivals() {
  return (
    <div className="bg-green-30 px-4 pb-28 pt-4 md:pb-32 md:pt-16 lg:pb-40 lg:pt-20">
      <h2 className="mb-10 text-center text-xl md:mb-12 md:text-2xl lg:text-3xl">
        NEW ARRIVALS
      </h2>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
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
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {/* Slides */}
          {ITEMS.map(item => (
            <SwiperSlide key={item.id} className="w-[200px] sm:w-[250px]">
              <li>
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <div>{item.price}</div>
                </div>
              </li>
            </SwiperSlide>
          ))}

          {/* Custom navigation buttons */}
          <div className="custom-prev">Prev</div>
          <div className="custom-next">Next</div>
        </Swiper>

        {/* Pagination progress bar */}
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}

export default NewArrivals;
