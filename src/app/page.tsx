import Link from 'next/link'
import InnerLayout from '@/components/layouts/InnerLayout'
import Input from '@/components/input/Input'
import Footer from '@/layout/Footer'
import CategoryList from '@/components/CategoryList'
import BannerList from '@/components/BannerList'
import ServiceList from '@/components/ServiceList'

export default function Home() {
  return (
    <main>
      <InnerLayout borderType="borderBottomThin">
        <form>
          {/* 추후 value 추가 필요 */}
          <Input name="search" placeholder="검색어를 입력하세요" />
        </form>
      </InnerLayout>
      <InnerLayout layoutType="swiper">
        <h2 className="hidden">카테고리</h2>
        <div>
          {/* 스와이퍼 사용 */}
          <CategoryList />
        </div>
      </InnerLayout>
      <InnerLayout layoutType="swiper" borderType="borderBottomBold">
        <h2 className="hidden">배너</h2>
        <div>
          {/* 스와이퍼 사용 */}
          <BannerList />
        </div>
      </InnerLayout>
      <InnerLayout>
        <h2 className="hidden">서비스 목록</h2>
        <ServiceList />
      </InnerLayout>
      <Footer />
    </main>
  )
}
