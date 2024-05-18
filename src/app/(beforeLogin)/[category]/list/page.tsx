'use client'

import { useParams } from 'next/navigation'
import InnerLayout from '@/components/layouts/InnerLayout'
import ServiceList from '@/components/ServiceList'

export default function Home() {
  const { category } = useParams()

  return (
    <main>
      <InnerLayout>
        <h1 className="h1 marginBottom32">{category} 카테고리</h1>
        <ServiceList />
      </InnerLayout>
    </main>
  )
}
