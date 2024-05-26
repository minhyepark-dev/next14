'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules'
import SwiperCore from 'swiper'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function BannerList() {
  SwiperCore.use([Navigation, Scrollbar, Autoplay])
  const [banners, setBanners] = useState([])
  const getBanners = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/banners`,
      )
      const data = await response.json()
      setBanners(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getBanners()
  }, [])
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
        {banners.map((item: { id: string; image: string; name: string }) => (
          <SwiperSlide key={item.id}>
            <div>
              <Link href={`/${item.id}/list`}>
                <img src={item.image} alt={item.name} />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
