import Image from 'next/image'
import Logo from '../../public/logo.png'

export default function Header() {
  return (
    <header className="header">
      <h1>
        <Image src={Logo} alt="로고" width="150" />
      </h1>
    </header>
  )
}
