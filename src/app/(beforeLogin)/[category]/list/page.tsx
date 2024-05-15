'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import InnerLayout from '@/components/layouts/InnerLayout'

export default function Home() {
  const { category } = useParams()
  const items = [
    {
      id: 1,
      name: 'Product 1',
      price: 2000,
      imgSrc: 'https://placehold.co/150x150',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 30000,
      imgSrc: 'https://placehold.co/150x150',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 25000,
      imgSrc: 'https://placehold.co/150x150',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 26000,
      imgSrc: 'https://placehold.co/150x150',
    },
  ]
  return (
    <main>
      <InnerLayout>
        <h1 className="h1 marginBottom32">{category} 카테고리</h1>
        <div className="serviceList">
          {items.map((item) => (
            <div key={item.id}>
              <Link href={`/fix/list/${item.id}`}>
                <img src={item.imgSrc} alt={item.name} />
                <p className="content2">{item.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </InnerLayout>
    </main>
  )
}
