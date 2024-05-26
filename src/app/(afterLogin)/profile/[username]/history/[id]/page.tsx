'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import InnerLayout from '@/components/layouts/InnerLayout'
import { ProductDetailProps } from '@/@type/product'
import { formatDateYYMMDDtoKorean, formatPriceToKRW } from '@/utils/convert'

export default function Home() {
  const { id } = useParams()
  const [history, setHistory] = useState<ProductDetailProps>({
    id: 0,
    name: '',
    price: {
      totalProductPrice: 0,
      totalDeliveryPrice: 0,
      totalPrice: 0,
    },
    date: '',
    products: [],
  })
  const getHistory = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/history/${id}`,
      )
      const data = await response.json()
      setHistory(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getHistory()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <main>
      <InnerLayout>
        <h1 className="h1 marginBottom32">
          {formatDateYYMMDDtoKorean(history.date)} 구매내역
        </h1>
        {/* 구매 내역 리스트 */}
        <ul className="itemLists">
          {history?.products.map((item) => (
            <li key={item.id}>
              <div>
                <img src={item.image} alt="1" />
                <p className="content1">
                  <span>{item.name}</span>
                  <span className="bold">{formatPriceToKRW(item.price)}원</span>
                </p>
              </div>
              <p>수량 : {item.quantity}</p>
            </li>
          ))}
        </ul>
        <div className="definitionList">
          <dl className="content1">
            <dt>총 상품금액</dt>
            <dd>{formatPriceToKRW(history.price.totalProductPrice)} 원</dd>
          </dl>
          <dl className="content1">
            <dt>총 배송비</dt>
            <dd>{formatPriceToKRW(history.price.totalDeliveryPrice)} 원</dd>
          </dl>
          <dl className="h3 bold">
            <dt>총 주문금액</dt>
            <dd>{formatPriceToKRW(history.price.totalPrice)} 원</dd>
          </dl>
        </div>
      </InnerLayout>
    </main>
  )
}
