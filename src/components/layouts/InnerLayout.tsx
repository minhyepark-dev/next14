type LayoutType = 'normal' | 'swipe' | 'full'

interface InnerLayoutProps {
  children: React.ReactNode
  layoutType?: LayoutType
  borderType?: string
}

export default function InnerLayout({
  children,
  layoutType = 'normal',
  borderType,
}: InnerLayoutProps) {
  return (
    <section className={`innerLayout ${layoutType} ${borderType}`}>
      {children}
    </section>
  )
}
