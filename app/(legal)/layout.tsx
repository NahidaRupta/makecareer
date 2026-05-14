export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1 content-max section-padding prose prose-neutral max-w-none">
      {children}
    </main>
  );
}
