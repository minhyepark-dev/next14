'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ServiceList() {
  const [likedItems, setLikedItems] = useState<number[]>([])

  const [serviceLists, setServiceLists] = useState([])
  // 리스트 가지고 오기
  const getServiceLists = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/services`,
      )
      const data = await response.json()
      setServiceLists(data)
    } catch (error) {
      console.error(error)
    }
  }
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
      const data = await response.json()
      console.log(data)
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
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getServiceLists()
  }, [])

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
      {serviceLists.map(
        (item: {
          id: number
          image: string
          name: string
          price: number
          like: boolean
        }) => (
          <div key={item.id}>
            <Link href={`/fix/list/${item.id}`}>
              <img src={item.image} alt={item.name} />
              <p className="content1 title">{item.name}</p>
              <p className="h3 price">{item.price}</p>
            </Link>
            <button
              type="button"
              className={`likeButton ${likedItems.includes(item.id) ? 'liked' : ''} ${item.like ? 'liked' : ''}`}
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
