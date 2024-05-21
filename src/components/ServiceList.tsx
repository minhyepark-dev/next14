'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ServiceList() {
  const [likedItems, setLikedItems] = useState<number[]>([])

  const [serviceLists, setServiceLists] = useState([])
  const getServiceLists = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/services`,
      )
      const data = await response.json()
      setServiceLists(data)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getServiceLists()
  }, [])

  const handleClick = (id: number) => {
    setLikedItems((prev: number[]) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    )
  }

  return (
    <div className="serviceList">
      {serviceLists.map(
        (item: { id: number; image: string; name: string; price: number }) => (
          <div key={item.id}>
            <Link href={`/fix/list/${item.id}`}>
              <img src={item.image} alt={item.name} />
              <p className="content1 title">{item.name}</p>
              <p className="h3 price">{item.price}</p>
            </Link>
            <button
              type="button"
              className={`likeButton ${likedItems.includes(item.id) ? 'liked' : ''}`}
              onClick={() => handleClick(item.id)}
            >
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
        ),
      )}
    </div>
  )
}
