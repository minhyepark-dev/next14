'use client'

import { useEffect, useState } from 'react'
import InnerLayout from '@/components/layouts/InnerLayout'
import Input from '@/components/input/Input'
import Footer from '@/layout/Footer'
import CategoryList from '@/components/CategoryList'
import BannerList from '@/components/BannerList'
import ServiceList from '@/components/ServiceList'

export default function Home() {
  const [serviceLists, setServiceLists] = useState([])
  // 리스트 가지고 오기
  const getServiceLists = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/services`,
      )
      const data = await response.json()
      setServiceLists(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getServiceLists()
  }, [])

  return (
    <main>
      <InnerLayout borderType="borderBottomThin">
        <form>
          {/* 추후 value 추가 필요 */}
          <Input name="search" placeholder="검색어를 입력하세요" />
        </form>
      </InnerLayout>
      <InnerLayout layoutType="swiper" style={{ paddingBottom: '16px' }}>
        <h2 className="hidden">카테고리</h2>
        <div>
          {/* 스와이퍼 사용 */}
          <CategoryList />
        </div>
      </InnerLayout>
      <InnerLayout
        layoutType="swiper"
        borderType="borderBottomBold"
        style={{ paddingTop: '16px' }}
      >
        <h2 className="hidden">배너</h2>
        <div>
          {/* 스와이퍼 사용 */}
          <BannerList />
        </div>
      </InnerLayout>
      <InnerLayout>
        <h2 className="hidden">서비스 목록</h2>
        <ServiceList data={serviceLists} />
      </InnerLayout>
      <Footer />
    </main>
  )
}
