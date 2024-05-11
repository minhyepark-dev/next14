import Link from 'next/link'
import InnerLayout from '@/components/layouts/InnerLayout'

export default function Home() {
  return (
    <main className="innerLayout">
      <h1 className="h1 marginBottom32">Home</h1>
      <InnerLayout>
        <form>
          <div className="inputWrap">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="검색어를 입력하세요"
            />
          </div>
        </form>
      </InnerLayout>
      <InnerLayout>
        <h2 className="hidden">카테고리</h2>
        <div>
          <ul className="categoryList">
            <li>
              <Link href="/fix/list">카테고리1</Link>
            </li>
            <li>
              <Link href="/clean/list">카테고리2</Link>
            </li>
            <li>
              <Link href="/lesson/list">카테고리3</Link>
            </li>
          </ul>
        </div>
      </InnerLayout>
      <InnerLayout layoutType="swipe">
        <h2 className="hidden">배너</h2>
        <div>
          {/* 스와이퍼 사용 */}
          <ul className="bannerList">
            <li>
              <Link href="/fix/list">
                <img src="/images/banner1.png" alt="배너1" />
              </Link>
            </li>
            <li>
              <Link href="/clean/list">
                <img src="/images/banner2.png" alt="배너2" />
              </Link>
            </li>
          </ul>
        </div>
      </InnerLayout>
      <InnerLayout>
        <h2 className="hidden">서비스 목록</h2>
        <div>
          <div>
            <div>
              <Link href="/fix/list/1">
                <img src="/images/banner2.png" alt="배너2" />
                <p>서비스 이름</p>
              </Link>
            </div>
            <div>
              <Link href="/fix/list/1">
                <img src="/images/banner2.png" alt="배너2" />
                <p>서비스 이름</p>
              </Link>
            </div>
            <div>
              <Link href="/fix/list/1">
                <img src="/images/banner2.png" alt="배너2" />
                <p>서비스 이름</p>
              </Link>
            </div>
            <div>
              <Link href="/fix/list/1">
                <img src="/images/banner2.png" alt="배너2" />
                <p>서비스 이름</p>
              </Link>
            </div>
          </div>
        </div>
      </InnerLayout>
      <footer>
        <address>
          <p>주소: 서울특별시 강남구 테헤란로 427 위워크 선릉</p>
          <p>대표: 홍길동</p>
          <p>전화: 02-1234-5678</p>
          <p>이메일: 12354546@gmail.com</p>
        </address>
      </footer>
    </main>
  )
}
