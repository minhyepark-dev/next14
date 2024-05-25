'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import InnerLayout from '@/components/layouts/InnerLayout'

export default function Home() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    image: '',
  })
  const getProfile = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/profile`,
      )
      const data = await response.json()
      setProfile(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getProfile()
  }, [])
  return (
    <main>
      <InnerLayout>
        <h1 className="h1 marginBottom32">Profile</h1>
        <div className="profileBox content2">
          <div className="imgEdit">
            <div className="imgWrap">
              <img src={profile.image} alt="프로필 이미지" />
            </div>
            <label htmlFor="image">수정</label>
            <input id="image" type="file" className="hidden" />
          </div>
          <p>{profile.name}</p>
          <p>{profile.email}</p>
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
