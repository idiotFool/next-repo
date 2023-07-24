export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="layout">{children}</section>;
}
