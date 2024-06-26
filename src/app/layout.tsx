import type { Metadata } from 'next'
import '@/styles/common.scss'
import Header from '@/layout/Header'
import Nav from '@/layout/Nav'
import { MSWComponent } from './_component/MSWComponent'
import ReactQueryProviders from '@/hooks/useReactQuery'

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
      <body className="layout">
        <MSWComponent />
        <Header />
        <ReactQueryProviders>{children}</ReactQueryProviders>
        <Nav />
      </body>
    </html>
  )
}
