'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function CategoryList() {
  SwiperCore.use([Navigation, Scrollbar, Autoplay])
  const [category, setCategory] = useState([])
  const getCategory = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/category`,
      )
      const data = await response.json()
      setCategory(data)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getCategory()
  }, [])

  return (
    <div className="categoryList">
      <Swiper
        loop // 슬라이드 루프
        spaceBetween={0} // 슬라이스 사이 간격
        slidesPerView={5.3} // 보여질 슬라이스 수
      >
        {category.map((item: { id: number; image: string; name: string }) => (
          <SwiperSlide key={item.id}>
            <div>
              <Link href="/fix/list">
                <img src={item.image} alt={item.name} />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
