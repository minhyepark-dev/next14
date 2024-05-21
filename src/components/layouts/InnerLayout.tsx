type LayoutType = 'normal' | 'swiper' | 'full'

interface InnerLayoutProps {
  children: React.ReactNode
  layoutType?: LayoutType
  borderType?: string
  style?: React.CSSProperties
}

export default function InnerLayout({
  children,
  layoutType = 'normal',
  borderType,
  style,
}: InnerLayoutProps) {
  return (
    <section
      className={`innerLayout ${layoutType} ${borderType || ''}`}
      style={style}
    >
      {children}
    </section>
  )
}
