import Link from 'next/link';
import PageContainer from '@/components/layout/PageContainer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export default async function HomePage() {
  // In production, this would fetch from the database
  // For now, using placeholder data
  const featuredSites = [];
  const categories = [
    { name: 'Spor Bahisleri', slug: 'spor-bahisleri', description: 'Futbol, basketbol ve daha fazlası' },
    { name: 'Casino', slug: 'casino', description: 'Slot, rulet, blackjack oyunları' },
    { name: 'Canlı Casino', slug: 'canli-casino', description: 'Gerçek krupiyelerle oyun deneyimi' },
    { name: 'Slot Oyunları', slug: 'slot-oyunlari', description: 'Binlerce farklı slot seçeneği' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-primary to-navy-800 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(245,158,11,0.3),transparent_50%)]"></div>
        </div>
        <PageContainer className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Güvenilir siteleri <span className="text-accent">Max Bey</span> ile keşfet
            </h1>
            <p className="text-xl text-muted mb-8 leading-relaxed max-w-2xl mx-auto">
              Max Bey, lisans, ödeme hızı ve kullanıcı deneyimine göre seçilmiş
              güvenilir siteleri sizin için listeler.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sites">
                <Button variant="primary" size="lg">
                  Güvenilir Siteleri Gör
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Nasıl Değerlendiriyoruz?
              </Button>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Featured Sites Section */}
      <section className="py-16 bg-background">
        <PageContainer>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Öne Çıkan Siteler
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Uzmanlarımız tarafından değerlendirilen ve en yüksek puanı alan güvenilir siteler
            </p>
          </div>

          {featuredSites.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Site cards will be rendered here when data is available */}
            </div>
          ) : (
            <Card className="text-center py-12">
              <p className="text-muted mb-4">Öne çıkan siteler yükleniyor...</p>
              <p className="text-sm text-muted">
                Veritabanını başlatmak için lütfen{' '}
                <code className="bg-secondary px-2 py-1 rounded text-accent">npm run db:migrate</code> ve{' '}
                <code className="bg-secondary px-2 py-1 rounded text-accent">npm run db:seed</code> komutlarını çalıştırın.
              </p>
            </Card>
          )}

          <div className="text-center">
            <Link href="/sites">
              <Button variant="secondary" size="lg">
                Tüm Siteleri Görüntüle
              </Button>
            </Link>
          </div>
        </PageContainer>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-primary">
        <PageContainer>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Kategoriler
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              İlginize uygun kategoriyi seçin ve en iyi siteleri keşfedin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.slug} href={`/sites?category=${category.slug}`}>
                <Card hover className="text-center h-full">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {category.name}
                    </h3>
                    <p className="text-muted text-sm">{category.description}</p>
                  </div>
                  <div className="mt-4">
                    <Badge variant="accent">Keşfet</Badge>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* How We Evaluate Section */}
      <section className="py-16 bg-background">
        <PageContainer>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nasıl Değerlendiriyoruz?
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Her siteyi kapsamlı kriterlere göre değerlendiriyor ve en güvenilir olanları sizlerle paylaşıyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Lisans ve Güvenilirlik</h3>
                  <p className="text-muted text-sm">Uluslararası geçerli lisansları ve güvenlik sertifikalarını kontrol ediyoruz.</p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Ödeme Hızı</h3>
                  <p className="text-muted text-sm">Para çekme işlemlerinin ne kadar hızlı gerçekleştiğini test ediyoruz.</p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Bonus Şartları</h3>
                  <p className="text-muted text-sm">Bonus ve promosyonların şartlarını detaylı inceleyip değerlendiriyoruz.</p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Mobil Uyumluluk</h3>
                  <p className="text-muted text-sm">Mobil cihazlarda kullanım kolaylığını ve performansı değerlendiriyoruz.</p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Kullanıcı Deneyimi</h3>
                  <p className="text-muted text-sm">Site tasarımı, navigasyon ve genel kullanım kolaylığını analiz ediyoruz.</p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Müşteri Desteği</h3>
                  <p className="text-muted text-sm">Canlı destek kalitesi ve yanıt sürelerini test ediyoruz.</p>
                </div>
              </div>
            </Card>
          </div>
        </PageContainer>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-navy-900 to-navy-800">
        <PageContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hazır mısınız?
            </h2>
            <p className="text-muted mb-8 max-w-2xl mx-auto">
              Güvenilir ve lisanslı siteleri keşfetmeye şimdi başlayın
            </p>
            <Link href="/sites">
              <Button variant="primary" size="lg">
                Siteleri İncele
              </Button>
            </Link>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
