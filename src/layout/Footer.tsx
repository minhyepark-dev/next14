import Image from 'next/image'
import Logo from '../../public/logo.png'

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="hidden">하단 메뉴</h2>
      <Image src={Logo} alt="로고" width="150" />
      <address className="content3">
        <p>주소: 서울특별시 강남구 테헤란로 427 위워크 선릉</p>
        <p>대표: 홍길동</p>
        <p>전화: 02-1234-5678</p>
        <p>이메일: 12354546@gmail.com</p>
      </address>
    </footer>
  )
}
