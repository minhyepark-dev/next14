'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function CategoryDetailImage() {
  SwiperCore.use([Navigation, Scrollbar, Autoplay])
  return (
    <div className="categoryDetailImage">
      <Swiper
        loop // 슬라이드 루프
        spaceBetween={0}
        slidesPerView={1} // 보여질 슬라이스 수
        autoplay={{
          delay: 3000,
        }}
      >
        <SwiperSlide>
          <div>
            <img src="https://placehold.co/400x300" alt="카테고리1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://placehold.co/400x300" alt="카테고리2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://placehold.co/400x300" alt="카테고리3" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
