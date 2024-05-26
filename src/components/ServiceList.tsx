'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import { Service, ServiceListProps } from '@/@type/product'
import { formatPriceToKRW } from '@/utils/convert'

export default function ServiceList({ data }: ServiceListProps) {
  console.log(data)
  const [likedItems, setLikedItems] = useState<number[]>([])
  const { category } = useParams()

  // 좋아요 눌렀을 때
  const postServiceLike = async (id: number) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/services/${id}`,
        {
          method: 'post',
          body: JSON.stringify({ like: true }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      const result = await response.json()
      console.log(result)
    } catch (error) {
      console.error(error)
    }
  }

  // 좋아요 취소
  const deleteServiceLike = async (id: number) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/services/${id}`,
        {
          method: 'delete',
          body: JSON.stringify({ like: false }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      const result = await response.json()
      console.log(result)
    } catch (error) {
      console.error(error)
    }
  }

  const handleClick = (id: number) => {
    setLikedItems((prev: number[]) => {
      if (prev.includes(id)) {
        deleteServiceLike(id)
        return prev.filter((itemId) => itemId !== id)
      }
      postServiceLike(id)
      return [...prev, id]
    })
  }

  return (
    <div className="serviceList">
      {data.map((item: Service) => (
        <div key={item.id}>
          <Link href={`/${category}/list/${item.id}`}>
            <img src={item.image} alt={item.name} />
            <p className="content1 title">{item.name}</p>
            <p className="h3 price">{formatPriceToKRW(item.price)}원</p>
          </Link>
          <button
            type="button"
            className={`likeButton ${likedItems.includes(item.id) ? 'liked' : ''} ${item.like ? 'liked' : ''}`}
            onClick={() => handleClick(item.id)}
          >
            <span className="material-symbols-outlined">favorite</span>
          </button>
        </div>
      ))}
    </div>
  )
}
