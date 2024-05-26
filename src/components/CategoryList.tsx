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
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getCategory()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="categoryList">
      <Swiper
        spaceBetween={0} // 슬라이스 사이 간격
        slidesPerView={5.5} // 보여질 슬라이스 수
      >
        {category.map((item: { id: string; image: string; name: string }) => (
          <SwiperSlide key={item.id}>
            <div className="categoryWrap">
              <div>
                <Link href={`${item.id}/list`}>
                  <img src={item.image} alt={item.name} />
                </Link>
              </div>
              <p className="content2">{item.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
