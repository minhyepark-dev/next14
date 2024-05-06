export default function AfterLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>로그인 후 {children}</div>;
}
