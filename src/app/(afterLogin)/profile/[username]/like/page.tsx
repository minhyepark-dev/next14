import ServiceList from '@/components/ServiceList'
import InnerLayout from '@/components/layouts/InnerLayout'

export default function Home() {
  return (
    <main>
      <InnerLayout>
        <h1 className="h1 marginBottom32">좋아요 내역</h1>
        <ServiceList />
      </InnerLayout>
    </main>
  )
}
