import InnerLayout from '@/components/layouts/InnerLayout'

export default function Home() {
  // 예시로 사용할 구매 내역 데이터
  const purchaseDetails = {
    date: '2024-05-15',
    items: [
      { id: 1, name: 'Product 1', price: 10, quantity: 2 },
      { id: 2, name: 'Product 2', price: 20, quantity: 1 },
      { id: 3, name: 'Product 3', price: 15, quantity: 3 },
    ],
  }

  return (
    <main>
      <InnerLayout>
        <h1 className="h1 marginBottom32">{purchaseDetails.date} 내역</h1>
        {/* 구매 내역 리스트 */}
        <ul className="itemLists">
          {purchaseDetails.items.map((item) => (
            <li key={item.id}>
              <div>
                <img src="https://placehold.co/100x100" alt="1" />
                <p className="content1">
                  <span>{item.name}</span>
                  <span className="bold">{item.price}원</span>
                </p>
              </div>
              <p>수량 : {item.quantity}</p>
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
      </InnerLayout>
    </main>
  )
}
