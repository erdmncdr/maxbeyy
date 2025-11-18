'use client';

import { useEffect, useState } from 'react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Link from 'next/link';

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    totalSites: 0,
    activeSites: 0,
    recommendedSites: 0,
    totalCategories: 0,
  });

  const [recentSites, setRecentSites] = useState<any[]>([]);

  useEffect(() => {
    // In production, this would fetch from API
    // For now, using placeholder data
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Genel Bakış</h1>
        <p className="text-muted">Admin paneline hoş geldiniz</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted text-sm mb-1">Toplam Site</p>
              <p className="text-3xl font-bold text-foreground">{stats.totalSites}</p>
            </div>
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🎰</span>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted text-sm mb-1">Aktif Site</p>
              <p className="text-3xl font-bold text-foreground">{stats.activeSites}</p>
            </div>
            <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">✅</span>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted text-sm mb-1">Öne Çıkan</p>
              <p className="text-3xl font-bold text-foreground">{stats.recommendedSites}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">⭐</span>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted text-sm mb-1">Kategori</p>
              <p className="text-3xl font-bold text-foreground">{stats.totalCategories}</p>
            </div>
            <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📁</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Link href="/admin/sites/new">
          <Card hover className="text-center cursor-pointer">
            <div className="text-4xl mb-3">➕</div>
            <h3 className="text-lg font-semibold text-foreground mb-1">Yeni Site Ekle</h3>
            <p className="text-muted text-sm">Veritabanına yeni bir site ekleyin</p>
          </Card>
        </Link>

        <Link href="/admin/sites">
          <Card hover className="text-center cursor-pointer">
            <div className="text-4xl mb-3">📋</div>
            <h3 className="text-lg font-semibold text-foreground mb-1">Siteleri Yönet</h3>
            <p className="text-muted text-sm">Mevcut siteleri düzenleyin veya silin</p>
          </Card>
        </Link>

        <Link href="/admin/categories">
          <Card hover className="text-center cursor-pointer">
            <div className="text-4xl mb-3">🗂️</div>
            <h3 className="text-lg font-semibold text-foreground mb-1">Kategoriler</h3>
            <p className="text-muted text-sm">Kategorileri yönetin</p>
          </Card>
        </Link>
      </div>

      {/* Recent Sites */}
      <Card>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Son Eklenen Siteler</h2>
          <Link href="/admin/sites" className="text-accent hover:text-accent-hover text-sm">
            Tümünü Gör →
          </Link>
        </div>

        {recentSites.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-muted text-sm font-medium pb-3">Site Adı</th>
                  <th className="text-left text-muted text-sm font-medium pb-3">Kategori</th>
                  <th className="text-left text-muted text-sm font-medium pb-3">Puan</th>
                  <th className="text-left text-muted text-sm font-medium pb-3">Durum</th>
                </tr>
              </thead>
              <tbody>
                {recentSites.map((site) => (
                  <tr key={site.id} className="border-b border-border/50">
                    <td className="py-3 text-foreground">{site.name}</td>
                    <td className="py-3">
                      <Badge variant="info" size="sm">{site.category.name}</Badge>
                    </td>
                    <td className="py-3 text-accent font-semibold">{site.rating.toFixed(1)}</td>
                    <td className="py-3">
                      <Badge variant={site.isActive ? 'success' : 'default'} size="sm">
                        {site.isActive ? 'Aktif' : 'Pasif'}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted mb-4">Henüz site eklenmemiş</p>
            <p className="text-sm text-muted">
              Veritabanını başlatmak için{' '}
              <code className="bg-secondary px-2 py-1 rounded text-accent">npm run db:migrate</code> ve{' '}
              <code className="bg-secondary px-2 py-1 rounded text-accent">npm run db:seed</code> komutlarını çalıştırın.
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}
