'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import InnerLayout from '@/components/layouts/InnerLayout'

export default function Home() {
  const [histories, setHistories] = useState([])
  const getHistory = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/history`,
      )
      const data = await response.json()
      setHistories(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getHistory()
  }, [])

  return (
    <main>
      <InnerLayout>
        <h1 className="h1 marginBottom32">구매 내역</h1>
        {/* 구매 내역 리스트 */}
        <ul className="itemLists">
          {histories.map((item) => (
            <li key={item.id}>
              <Link href={`/profile/username/history/${item.id}`}>
                <div>
                  <img src={item.image} alt="1" />
                  <p className="content1">
                    <span>{item.name}</span>
                    <span className="bold">{item.price}원</span>
                  </p>
                </div>
                <p className="content2">{item.date}</p>
              </Link>
            </li>
          ))}
        </ul>
      </InnerLayout>
    </main>
  )
}
