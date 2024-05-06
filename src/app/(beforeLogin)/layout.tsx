export default function BeforeLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>로그인 전 {children}</div>;
}
