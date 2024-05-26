'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import InnerLayout from '@/components/layouts/InnerLayout'
import ServiceList from '@/components/ServiceList'

export default function Home() {
  const { category } = useParams()

  const [categoryLists, setCategoryLists] = useState([])
  // 리스트 가지고 오기
  const getCategoryLists = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/${category}/lists`,
      )
      const data = await response.json()
      setCategoryLists(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getCategoryLists()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main>
      <InnerLayout>
        <h1 className="h1 marginBottom32">{category} 카테고리</h1>
        <ServiceList data={categoryLists} />
      </InnerLayout>
    </main>
  )
}
