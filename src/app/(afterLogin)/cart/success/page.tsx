import Button from '@/components/button/Button'
import InnerLayout from '@/components/layouts/InnerLayout'

export default function Home() {
  return (
    <main>
      <InnerLayout>
        <h1 className="h1 marginBottom32">결제완료</h1>
        {/* 결제 상세 내역 */}
        <div className="definitionList" style={{ marginBottom: '32px' }}>
          <dl>
            <dt className="content1">주문번호</dt>
            <dd className="content1 bold">OD30104545</dd>
          </dl>
          <dl>
            <dt className="content1">결제금액</dt>
            <dd className="content1 bold">100,000원</dd>
          </dl>
          <dl>
            <dt className="content1">결제수단</dt>
            <dd className="content1 bold">신용카드</dd>
          </dl>
          <dl>
            <dt className="content1">결제일시</dt>
            <dd className="content1 bold">2021. 10. 10 10:10</dd>
          </dl>
        </div>
        <Button width="default" btnStyle="line" className="bold">
          홈으로 가기
        </Button>
      </InnerLayout>
    </main>
  )
}
