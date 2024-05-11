type LayoutType = 'normal' | 'swipe' | 'full'

interface InnerLayoutProps {
  children: React.ReactNode
  layoutType?: LayoutType
}

export default function InnerLayout({
  children,
  layoutType = 'normal',
}: InnerLayoutProps) {
  return <section className={`innerLayout ${layoutType}`}>{children}</section>
}
