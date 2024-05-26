'use client'

import { useEffect, useState } from 'react'
import ServiceList from '@/components/ServiceList'
import InnerLayout from '@/components/layouts/InnerLayout'

export default function Home() {
  const [likeLists, setLikeLists] = useState([])
  // 리스트 가지고 오기
  const getLikeLists = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/services/like`,
      )
      const data = await response.json()
      setLikeLists(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getLikeLists()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main>
      <InnerLayout>
        <h1 className="h1 marginBottom32">좋아요 내역</h1>
        <ServiceList data={likeLists} />
      </InnerLayout>
    </main>
  )
}
