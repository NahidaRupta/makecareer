export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Job seeker header variant will be added in Phase 4 */}
      <main className="flex-1">{children}</main>
    </>
  );
}
