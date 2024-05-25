'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Button from '@/components/button/Button'
import InnerLayout from '@/components/layouts/InnerLayout'
import CategoryDetailImage from '@/components/CategoryDetailImage'
import { ProductsProps } from '@/@type/product'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [count, setCount] = useState(1)
  const { id } = useParams()
  const [detail, setDetail] = useState<ProductsProps>({
    id: '',
    name: '',
    price: 0,
    description: '',
    images: [],
  })
  const getDetail = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/services/${id}`,
      )
      const data = await response.json()
      setDetail(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getDetail()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  // counter 작동 함수
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <main>
      <InnerLayout layoutType="full">
        <CategoryDetailImage images={detail.images} />
      </InnerLayout>
      <InnerLayout>
        <div className="productInfo">
          <p className="h2">{detail.name}</p>
          <p className="h3 marginBottom32">{detail.price}원</p>
          <p className="content2">{detail.description}</p>
        </div>
      </InnerLayout>
      <div className="fixedButton">
        <Button btnStyle="bgBlack" onClick={handleOpenModal}>
          구매하기
        </Button>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modalContent">
            <h2 className="content1 marginBottom16">옵션 선택</h2>
            <div className="counter marginBottom16">
              <button type="button" onClick={decrement}>
                -
              </button>
              <span className="content2">{count}</span>
              <button type="button" onClick={increment}>
                +
              </button>
            </div>
            <div className="definitionList marginBottom16">
              <dl className="h3 bold">
                <dt>총 주문금액</dt>
                <dd>19,000 원</dd>
              </dl>
            </div>
            <div className="buttonWrap">
              <Button width="medium" btnStyle="line">
                장바구니
              </Button>
              <Button width="medium" btnStyle="bgBlack">
                바로주문
              </Button>
            </div>
            <button type="button" onClick={handleCloseModal}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
