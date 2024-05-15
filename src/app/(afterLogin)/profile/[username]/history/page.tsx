'use client'

import { useState } from 'react'
import Link from 'next/link'
import InnerLayout from '@/components/layouts/InnerLayout'

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [items, setItems] = useState([
    { id: 1, name: 'Product 1', price: 2000, date: '2021-10-01' },
    { id: 2, name: 'Product 2', price: 30000, date: '2021-10-02' },
    { id: 3, name: 'Product 3', price: 25000, date: '2021-10-03' },
  ])
  return (
    <main>
      <InnerLayout>
        <h1 className="h1 marginBottom32">구매 내역</h1>
        {/* 구매 내역 리스트 */}
        <ul className="itemLists">
          {items.map((item) => (
            <li key={item.id}>
              <Link href={`/profile/username/history/${item.id}`}>
                <div>
                  <img src="https://placehold.co/100x100" alt="1" />
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
