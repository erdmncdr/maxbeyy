'use client';

import { useState, useEffect } from 'react';
import PageContainer from '@/components/layout/PageContainer';
import SiteFilterBar, { FilterState } from '@/components/site/SiteFilterBar';
import SiteCard from '@/components/site/SiteCard';
import Card from '@/components/ui/Card';

// Placeholder data - will be replaced with actual database queries
const placeholderCategories = [
  { id: '1', name: 'Spor Bahisleri', slug: 'spor-bahisleri' },
  { id: '2', name: 'Casino', slug: 'casino' },
  { id: '3', name: 'Canlı Casino', slug: 'canli-casino' },
  { id: '4', name: 'Slot Oyunları', slug: 'slot-oyunlari' },
];

const placeholderTags = [
  { id: '1', name: 'Hızlı Ödeme', slug: 'hizli-odeme' },
  { id: '2', name: 'Yüksek Oran', slug: 'yuksek-oran' },
  { id: '3', name: 'Mobil Uyumlu', slug: 'mobil-uyumlu' },
  { id: '4', name: '24/7 Canlı Destek', slug: 'canli-destek' },
  { id: '5', name: 'Güvenli Lisans', slug: 'guvenli-lisans' },
  { id: '6', name: 'Çeşitli Bonus Seçenekleri', slug: 'bonus-secenekleri' },
];

export default function SitesPage() {
  const [sites, setSites] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    categorySlug: '',
    tagSlugs: [],
    sortBy: 'rating_desc',
  });

  useEffect(() => {
    // In production, this would fetch from API
    // For now, showing empty state
    setLoading(false);
  }, [filters]);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    setLoading(true);
    // Here you would fetch data from API with the new filters
  };

  return (
    <PageContainer>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Güvenilir Siteler
        </h1>
        <p className="text-muted text-lg">
          Lisanslı, güvenilir ve yüksek puanlı siteleri keşfedin
        </p>
      </div>

      <SiteFilterBar
        categories={placeholderCategories}
        tags={placeholderTags}
        onFilterChange={handleFilterChange}
      />

      {loading ? (
        <div className="text-center py-12">
          <p className="text-muted">Yükleniyor...</p>
        </div>
      ) : sites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sites.map((site) => (
            <SiteCard key={site.id} site={site} />
          ))}
        </div>
      ) : (
        <Card className="text-center py-12">
          <div className="max-w-md mx-auto">
            <svg
              className="w-16 h-16 text-muted mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Henüz site bulunmuyor
            </h3>
            <p className="text-muted mb-4">
              Veritabanını başlatmak için aşağıdaki komutları çalıştırın:
            </p>
            <div className="bg-secondary rounded-md p-4 text-left">
              <code className="text-accent text-sm block mb-2">npm run db:migrate</code>
              <code className="text-accent text-sm block">npm run db:seed</code>
            </div>
          </div>
        </Card>
      )}

      {/* Pagination placeholder */}
      {sites.length > 0 && (
        <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 bg-secondary text-foreground rounded-md hover:bg-navy-600 transition-colors">
              Önceki
            </button>
            <span className="px-4 py-2 bg-accent text-navy-900 font-semibold rounded-md">
              1
            </span>
            <button className="px-4 py-2 bg-secondary text-foreground rounded-md hover:bg-navy-600 transition-colors">
              Sonraki
            </button>
          </div>
        </div>
      )}
    </PageContainer>
  );
}
