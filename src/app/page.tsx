import Link from 'next/link'
import InnerLayout from '@/components/layouts/InnerLayout'
import Input from '@/components/input/Input'
import Footer from '@/layout/Footer'
import CategoryList from '@/components/CategoryList'
import BannerList from '@/components/BannerList'

export default function Home() {
  return (
    <main>
      <InnerLayout borderType="borderBottomThin">
        <form>
          {/* 추후 value 추가 필요 */}
          <Input name="search" placeholder="검색어를 입력하세요" />
        </form>
      </InnerLayout>
      <InnerLayout layoutType="swipe">
        <h2 className="hidden">카테고리</h2>
        <div>
          {/* 스와이퍼 사용 */}
          <CategoryList />
        </div>
      </InnerLayout>
      <InnerLayout layoutType="swipe" borderType="borderBottomBold">
        <h2 className="hidden">배너</h2>
        <div>
          {/* 스와이퍼 사용 */}
          <BannerList />
        </div>
      </InnerLayout>
      <InnerLayout>
        <h2 className="hidden">서비스 목록</h2>
        <div className="serviceList">
          <div>
            <Link href="/fix/list/1">
              <img src="https://placehold.co/150x150" alt="배너2" />
              <p className="content2">서비스 이름</p>
            </Link>
          </div>
          <div>
            <Link href="/fix/list/1">
              <img src="https://placehold.co/150x150" alt="배너2" />
              <p className="content2">서비스 이름</p>
            </Link>
          </div>
          <div>
            <Link href="/fix/list/1">
              <img src="https://placehold.co/150x150" alt="배너2" />
              <p className="content2">서비스 이름</p>
            </Link>
          </div>
          <div>
            <Link href="/fix/list/1">
              <img src="https://placehold.co/150x150" alt="배너2" />
              <p className="content2">서비스 이름</p>
            </Link>
          </div>
        </div>
      </InnerLayout>
      <Footer />
    </main>
  )
}
