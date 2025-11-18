'use client';

import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated' && pathname !== '/admin/login') {
      router.push('/admin/login');
    }
  }, [status, pathname, router]);

  // Don't show layout on login page
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  // Show loading while checking auth
  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="text-accent mb-2">MAX BEY</div>
          <p className="text-muted">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  // Don't render admin content if not authenticated
  if (status === 'unauthenticated') {
    return null;
  }

  const navLinks = [
    { href: '/admin/dashboard', label: 'Genel Bakış', icon: '📊' },
    { href: '/admin/sites', label: 'Siteler', icon: '🎰' },
    { href: '/admin/categories', label: 'Kategoriler', icon: '📁' },
    { href: '/admin/tags', label: 'Etiketler', icon: '🏷️' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="bg-primary border-b border-border">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <Link href="/admin/dashboard" className="text-2xl font-bold text-accent">
              MAX BEY
            </Link>
            <span className="text-muted text-sm">Admin Paneli</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-muted text-sm">{session?.user?.email}</span>
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="px-4 py-2 bg-secondary hover:bg-navy-600 text-foreground rounded-md transition-colors text-sm"
            >
              Çıkış
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-primary border-r border-border min-h-[calc(100vh-73px)]">
          <nav className="p-4">
            <ul className="space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-md transition-colors ${
                        isActive
                          ? 'bg-accent text-navy-900 font-semibold'
                          : 'text-muted hover:bg-secondary hover:text-foreground'
                      }`}
                    >
                      <span className="text-xl">{link.icon}</span>
                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="p-4 border-t border-border mt-8">
            <Link
              href="/"
              className="flex items-center space-x-2 text-muted hover:text-accent transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Siteye Dön</span>
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
