'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules'
import SwiperCore from 'swiper'
import Link from 'next/link'

export default function BannerList() {
  SwiperCore.use([Navigation, Scrollbar, Autoplay])
  return (
    <div className="bannerList">
      <Swiper
        loop // 슬라이드 루프
        spaceBetween={10} // 슬라이스 사이 간격
        slidesPerView={1.2} // 보여질 슬라이스 수
        autoplay={{
          delay: 2500,
          disableOnInteraction: false, // 사용자 상호작용시 슬라이더 일시 정지 비활성
        }}
      >
        <SwiperSlide>
          <div>
            <Link href="/fix/list">
              <img src="https://placehold.co/300x200" alt="배너1" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link href="/fix/list">
              <img src="https://placehold.co/300x200" alt="배너2" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link href="/fix/list">
              <img src="https://placehold.co/300x200" alt="배너3" />
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
