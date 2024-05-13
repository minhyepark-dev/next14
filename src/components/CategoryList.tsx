'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Link from 'next/link'

export default function CategoryList() {
  SwiperCore.use([Navigation, Scrollbar, Autoplay])
  return (
    <div className="categoryList">
      <Swiper
        loop // 슬라이드 루프
        spaceBetween={0} // 슬라이스 사이 간격
        slidesPerView={5.3} // 보여질 슬라이스 수
      >
        <SwiperSlide>
          <div>
            <Link href="/fix/list">
              <img src="https://placehold.co/50x50" alt="카테고리1" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link href="/fix/list">
              <img src="https://placehold.co/50x50" alt="카테고리1" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link href="/fix/list">
              <img src="https://placehold.co/50x50" alt="카테고리1" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link href="/fix/list">
              <img src="https://placehold.co/50x50" alt="카테고리1" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link href="/fix/list">
              <img src="https://placehold.co/50x50" alt="카테고리1" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link href="/fix/list">
              <img src="https://placehold.co/50x50" alt="카테고리1" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link href="/fix/list">
              <img src="https://placehold.co/50x50" alt="카테고리1" />
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
