'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function AdminSitesPage() {
  const [sites, setSites] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In production, fetch from API
    setLoading(false);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Siteler</h1>
          <p className="text-muted">Tüm siteleri görüntüle ve yönet</p>
        </div>
        <Link href="/admin/sites/new">
          <Button variant="primary" size="lg">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Yeni Site Ekle
          </Button>
        </Link>
      </div>

      <Card>
        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted">Yükleniyor...</p>
          </div>
        ) : sites.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-muted text-sm font-medium pb-3">Site Adı</th>
                  <th className="text-left text-muted text-sm font-medium pb-3">Kategori</th>
                  <th className="text-left text-muted text-sm font-medium pb-3">Puan</th>
                  <th className="text-left text-muted text-sm font-medium pb-3">Durum</th>
                  <th className="text-left text-muted text-sm font-medium pb-3">İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {sites.map((site) => (
                  <tr key={site.id} className="border-b border-border/50">
                    <td className="py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-secondary rounded flex items-center justify-center">
                          <span className="text-accent font-bold">{site.name.charAt(0)}</span>
                        </div>
                        <span className="text-foreground font-medium">{site.name}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <Badge variant="info" size="sm">{site.category.name}</Badge>
                    </td>
                    <td className="py-4">
                      <span className="text-accent font-semibold">{site.rating.toFixed(1)}</span>
                    </td>
                    <td className="py-4">
                      <Badge variant={site.isActive ? 'success' : 'default'} size="sm">
                        {site.isActive ? 'Aktif' : 'Pasif'}
                      </Badge>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center space-x-2">
                        <Link href={`/admin/sites/${site.id}`}>
                          <Button variant="secondary" size="sm">
                            Düzenle
                          </Button>
                        </Link>
                        <Button variant="danger" size="sm">
                          Sil
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">📭</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Henüz site yok</h3>
            <p className="text-muted mb-6">
              Veritabanını başlatmak için aşağıdaki komutları çalıştırın:
            </p>
            <div className="bg-secondary rounded-md p-4 max-w-md mx-auto text-left mb-6">
              <code className="text-accent text-sm block mb-2">npm run db:migrate</code>
              <code className="text-accent text-sm block">npm run db:seed</code>
            </div>
            <Link href="/admin/sites/new">
              <Button variant="primary">Yeni Site Ekle</Button>
            </Link>
          </div>
        )}
      </Card>
    </div>
  );
}
