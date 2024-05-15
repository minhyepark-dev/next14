'use client'

import { useState } from 'react'
import InnerLayout from '@/components/layouts/InnerLayout'
import Button from '@/components/button/Button'

export default function Home() {
  const [items, setItems] = useState([
    { id: 1, name: 'Product 1', price: 2000, quantity: 1, checked: false },
    { id: 2, name: 'Product 2', price: 30000, quantity: 2, checked: false },
    { id: 3, name: 'Product 3', price: 25000, quantity: 1, checked: false },
  ])

  // 전체 선택 상태를 관리하는 state
  const [selectAll, setSelectAll] = useState(false)
  // 전체 선택 체크박스가 변경될 때
  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target
    setSelectAll(checked)
    const updatedItems = items.map((item) => ({ ...item, checked }))
    setItems(updatedItems)
  }

  // 개별 아이템 체크박스가 변경될 때
  const handleItemCheckboxChange = (itemId: number) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, checked: !item.checked } : item,
    )
    setItems(updatedItems)
    setSelectAll(updatedItems.every((item) => item.checked))
  }
  return (
    <main>
      <InnerLayout style={{ paddingBottom: '120px' }}>
        <h1 className="h1 marginBottom32">Cart</h1>
        <label className="checkBoxLabel">
          <input
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAll}
          />
          전체 선택
        </label>
        <ul className="itemLists">
          {items.map((item) => (
            <li key={item.id}>
              <div>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleItemCheckboxChange(item.id)}
                />
                <img src="https://placehold.co/100x100" alt="1" />
                <p>
                  <span className="content2">{item.name}</span>
                  <span className="content2 bold">{item.price}원</span>
                </p>
              </div>
              <p>{item.quantity}</p>
            </li>
          ))}
        </ul>
        <div className="definitionList">
          <dl className="content1">
            <dt>총 상품금액</dt>
            <dd>16,000 원</dd>
          </dl>
          <dl className="content1">
            <dt>총 배송비</dt>
            <dd>3,000 원</dd>
          </dl>
          <dl className="h3 bold">
            <dt>총 주문금액</dt>
            <dd>19,000 원</dd>
          </dl>
        </div>
        <div className="fixedButton">
          <Button btnStyle="bgBlack">주문하기</Button>
        </div>
      </InnerLayout>
    </main>
  )
}
