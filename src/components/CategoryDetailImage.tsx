'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function CategoryDetailImage({ images }: { images: string[] }) {
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
        {images.map((image, index) => (
          <SwiperSlide key={image}>
            <div>
              <img src={image} alt={`상품 이미지 ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
