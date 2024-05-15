'use client'

import { useState } from 'react'
import Button from '@/components/button/Button'
import InnerLayout from '@/components/layouts/InnerLayout'
import CategoryDetailImage from '@/components/CategoryDetailImage'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [count, setCount] = useState(1)
  const product = {
    id: 1,
    name: '상품 이름',
    price: 10000,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit...',
    imageUrl: 'https://via.placeholder.com/300',
  }
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
        {/* <div>
          <img src={product.imageUrl} alt={product.name} />
        </div> */}
        <CategoryDetailImage />
      </InnerLayout>
      <InnerLayout>
        <div className="productInfo">
          <p className="h2">{product.name}</p>
          <p className="h3 marginBottom32">{product.price}원</p>
          <p className="content2">{product.description}</p>
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
