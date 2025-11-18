import { notFound } from 'next/navigation';
import PageContainer from '@/components/layout/PageContainer';
import SiteDetailHeader from '@/components/site/SiteDetailHeader';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

type SiteDetailType = {
  name: string;
  logoUrl: string;
  url: string;
  rating: number;
  longDescription: string;
  welcomeBonusText: string;
  minDeposit: number;
  isActive: boolean;
  isRecommended: boolean;
  category: { name: string };
  tags: Array<{ tag: { name: string } }>;
  reviews?: {
    pros: string;
    cons: string;
    summary: string;
  };
} | null;

// This would come from database in production
async function getSite(slug: string): Promise<SiteDetailType> {
  // Placeholder return - will be replaced with actual database query
  return null;
}

export default async function SiteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const site = await getSite(slug);

  if (!site) {
    // Show a message instead of 404 for demo purposes
    return (
      <PageContainer>
        <Card className="text-center py-12">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Site Bulunamadı
          </h1>
          <p className="text-muted mb-4">
            Aradığınız site veritabanında bulunamadı.
          </p>
          <p className="text-sm text-muted">
            Veritabanını başlatmak için lütfen{' '}
            <code className="bg-secondary px-2 py-1 rounded text-accent">npm run db:migrate</code> ve{' '}
            <code className="bg-secondary px-2 py-1 rounded text-accent">npm run db:seed</code> komutlarını çalıştırın.
          </p>
        </Card>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <SiteDetailHeader site={site} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Overview */}
          <Card>
            <h2 className="text-2xl font-bold text-foreground mb-4">Genel Bakış</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-muted leading-relaxed whitespace-pre-line">
                {site.longDescription}
              </p>
            </div>
          </Card>

          {/* Pros and Cons */}
          {site.reviews && (
            <Card>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Artılar ve Eksiler
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pros */}
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Artılar
                  </h3>
                  <div className="text-muted text-sm leading-relaxed whitespace-pre-line">
                    {site.reviews.pros}
                  </div>
                </div>

                {/* Cons */}
                <div>
                  <h3 className="text-lg font-semibold text-red-400 mb-3 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Eksiler
                  </h3>
                  <div className="text-muted text-sm leading-relaxed whitespace-pre-line">
                    {site.reviews.cons}
                  </div>
                </div>
              </div>

              {site.reviews.summary && (
                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Özet</h3>
                  <p className="text-muted leading-relaxed">{site.reviews.summary}</p>
                </div>
              )}
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Bonus Info */}
          <Card>
            <h3 className="text-xl font-bold text-foreground mb-4">Bonus Bilgileri</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted mb-1">Hoş Geldin Bonusu</p>
                <p className="text-accent font-semibold">{site.welcomeBonusText}</p>
              </div>
              <div>
                <p className="text-sm text-muted mb-1">Minimum Yatırım</p>
                <p className="text-foreground font-semibold">{site.minDeposit}₺</p>
              </div>
            </div>
          </Card>

          {/* Site Info */}
          <Card>
            <h3 className="text-xl font-bold text-foreground mb-4">Site Bilgileri</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-muted text-sm">Kategori</span>
                <Badge variant="info">{site.category.name}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted text-sm">Puan</span>
                <span className="text-accent font-bold">{site.rating.toFixed(1)} / 10</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted text-sm">Durum</span>
                <Badge variant={site.isActive ? 'success' : 'default'}>
                  {site.isActive ? 'Aktif' : 'Pasif'}
                </Badge>
              </div>
              {site.isRecommended && (
                <div className="flex justify-between items-center">
                  <span className="text-muted text-sm">Önerilen</span>
                  <Badge variant="accent">Evet</Badge>
                </div>
              )}
            </div>
          </Card>

          {/* Disclaimer */}
          <Card className="bg-navy-800/50">
            <div className="text-center">
              <div className="text-4xl mb-2">⚠️</div>
              <p className="text-xs text-muted leading-relaxed">
                <strong className="text-foreground">Uyarı:</strong> Kumar bağımlılığı
                ciddi bir sorundur. 18 yaşından küçükler için yasaktır. Sorumlu oyun
                oynayın ve kaybetmeyi göze alamayacağınız parayla asla oynamayın.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
