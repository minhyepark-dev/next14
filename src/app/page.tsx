import Link from 'next/link'
import InnerLayout from '@/components/layouts/InnerLayout'
import Input from '@/components/input/Input'
import Footer from '@/layout/Footer'

export default function Home() {
  return (
    <main>
      <InnerLayout borderType="borderBottomThin">
        <form>
          {/* 추후 value 추가 필요 */}
          <Input name="search" placeholder="검색어를 입력하세요" />
        </form>
      </InnerLayout>
      <InnerLayout>
        <h2 className="hidden">카테고리</h2>
        <div>
          {/* 스와이퍼 사용 */}
          <ul className="categoryList">
            <li>
              <Link href="/fix/list">
                <img src="https://placehold.co/50x50" alt="카테고리1" />
              </Link>
            </li>
            <li>
              <Link href="/clean/list">
                <img src="https://placehold.co/50x50" alt="카테고리2" />
              </Link>
            </li>
            <li>
              <Link href="/lesson/list">
                <img src="https://placehold.co/50x50" alt="카테고리3" />
              </Link>
            </li>
            <li>
              <Link href="/lesson/list">
                <img src="https://placehold.co/50x50" alt="카테고리3" />
              </Link>
            </li>
            <li>
              <Link href="/lesson/list">
                <img src="https://placehold.co/50x50" alt="카테고리3" />
              </Link>
            </li>
          </ul>
        </div>
      </InnerLayout>
      <InnerLayout layoutType="swipe" borderType="borderBottomBold">
        <h2 className="hidden">배너</h2>
        <div>
          {/* 스와이퍼 사용 */}
          <ul className="bannerList">
            <li>
              <Link href="/fix/list">
                <img src="https://placehold.co/300x200" alt="배너1" />
              </Link>
            </li>
            {/* <li>
              <Link href="/clean/list">
                <img src="https://placehold.co/300x200" alt="배너2" />
              </Link>
            </li> */}
          </ul>
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
