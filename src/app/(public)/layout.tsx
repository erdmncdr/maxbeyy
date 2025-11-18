import MainHeader from '@/components/layout/MainHeader';
import MainFooter from '@/components/layout/MainFooter';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader />
      <main className="flex-grow">{children}</main>
      <MainFooter />
    </div>
  );
}
