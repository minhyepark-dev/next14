'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()
  return (
    <nav className="nav">
      <h2 className="hidden">하단 메뉴</h2>
      <ul>
        <li className={pathname === '/' ? 'active' : ''}>
          <Link href="/">
            <span className="material-symbols-outlined">home</span>
          </Link>
        </li>
        {/* 로그인 한 사람만 카트와 프로필에 접근 가능 */}
        <li className={pathname === '/cart' ? 'active' : ''}>
          <Link href="/cart">
            <span className="material-symbols-outlined">shopping_cart</span>
          </Link>
        </li>
        <li className={pathname === '/profile/username' ? 'active' : ''}>
          <Link href="/profile/username">
            <span className="material-symbols-outlined">person</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
