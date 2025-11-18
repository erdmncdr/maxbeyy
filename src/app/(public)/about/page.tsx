import PageContainer from '@/components/layout/PageContainer';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'Hakkında - Max Bey',
  description: 'Max Bey hakkında bilgi edinin. Güvenilir site incelemeleri ve değerlendirme kriterlerimiz.',
};

export default function AboutPage() {
  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-6">Hakkında</h1>

        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Max Bey Nedir?</h2>
          <p className="text-muted leading-relaxed mb-4">
            Max Bey, online bahis ve casino siteleri hakkında objektif ve detaylı incelemeler
            sunan bir bilgilendirme platformudur. Amacımız, kullanıcıların güvenilir, lisanslı
            ve kaliteli hizmet veren siteleri kolayca bulabilmelerini sağlamaktır.
          </p>
          <p className="text-muted leading-relaxed">
            2024 yılında kurulan platformumuz, sektördeki deneyimli uzmanlar tarafından
            yönetilmektedir. Her site, kapsamlı kriterlerimize göre değerlendirilir ve
            kullanıcılarımızla paylaşılır.
          </p>
        </Card>

        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Değerlendirme Kriterlerimiz
          </h2>
          <ul className="space-y-3 text-muted">
            <li className="flex items-start">
              <span className="text-accent mr-2">✓</span>
              <span><strong>Lisans ve Güvenilirlik:</strong> Sitenin geçerli bir lisansa sahip olup olmadığını kontrol ediyoruz</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">✓</span>
              <span><strong>Ödeme Hızı:</strong> Para çekme işlemlerinin ne kadar sürede tamamlandığını test ediyoruz</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">✓</span>
              <span><strong>Bonus ve Promosyonlar:</strong> Bonus şartlarını detaylı inceleyip adil olup olmadığını değerlendiriyoruz</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">✓</span>
              <span><strong>Kullanıcı Deneyimi:</strong> Site tasarımı ve kullanım kolaylığını analiz ediyoruz</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">✓</span>
              <span><strong>Müşteri Desteği:</strong> Canlı destek kalitesini ve yanıt sürelerini test ediyoruz</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">✓</span>
              <span><strong>Mobil Uyumluluk:</strong> Mobil cihazlarda performansı değerlendiriyoruz</span>
            </li>
          </ul>
        </Card>

        <Card className="bg-navy-800/50">
          <h2 className="text-2xl font-bold text-foreground mb-4">Önemli Uyarı</h2>
          <p className="text-muted leading-relaxed">
            Max Bey, yalnızca bilgilendirme amacıyla hizmet vermektedir. Sitemizde yer alan
            bilgiler genel niteliktedir ve kişisel tavsiye olarak yorumlanmamalıdır. Kumar
            bağımlılığı ciddi bir sorundur. 18 yaşından küçükler için yasaktır. Lütfen
            sorumlu bir şekilde oynayın ve kaybetmeyi göze alamayacağınız parayla asla
            oynamayın.
          </p>
        </Card>
      </div>
    </PageContainer>
  );
}
