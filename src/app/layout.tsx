import type { Metadata } from 'next'
import '@/styles/common.scss'

export const metadata: Metadata = {
  title: 'Next14 Practice',
  description: 'Practicing Next.js 14 with TypeScript and SCSS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className="layout">{children}</body>
    </html>
  )
}
