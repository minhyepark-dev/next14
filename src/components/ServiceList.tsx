'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ServiceList() {
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

  const [likedItems, setLikedItems] = useState<number[]>([])

  const handleClick = (id: number) => {
    setLikedItems((prev: number[]) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    )
  }

  return (
    <div className="serviceList">
      {items.map((item) => (
        <div key={item.id}>
          <Link href={`/fix/list/${item.id}`}>
            <img src={item.imgSrc} alt={item.name} />
            <p className="content2">{item.name}</p>
          </Link>
          <button
            type="button"
            className={`likeButton ${likedItems.includes(item.id) ? 'liked' : ''}`}
            onClick={() => handleClick(item.id)}
          >
            <span className="material-symbols-outlined">favorite</span>
          </button>
        </div>
      ))}
    </div>
  )
}
