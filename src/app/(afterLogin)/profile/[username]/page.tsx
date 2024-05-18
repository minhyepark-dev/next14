import Link from 'next/link'
import InnerLayout from '@/components/layouts/InnerLayout'

export default function Home() {
  return (
    <main>
      <InnerLayout>
        <h1 className="h1 marginBottom32">Profile</h1>
        <div className="profileBox content2">
          <div className="imgEdit">
            <div className="imgWrap">
              <img src="https://via.placeholder.com/150" alt="프로필 이미지" />
            </div>
            <label htmlFor="image">수정</label>
            <input id="image" type="file" className="hidden" />
          </div>
          <p>username</p>
          <p>asdfqwer132@gmail.com</p>
        </div>
        <ul className="profileList">
          <li>
            <Link href="/profile/username/edit">프로필 수정</Link>
          </li>
          <li>
            <Link href="/profile/username/history">구매 내역</Link>
          </li>
          <li>
            <Link href="/profile/username/like">좋아요 내역</Link>
          </li>
        </ul>
      </InnerLayout>
    </main>
  )
}
