import PageContainer from '@/components/layout/PageContainer';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'İletişim - Max Bey',
  description: 'Max Bey ile iletişime geçin. Sorularınız ve önerileriniz için bizimle iletişime geçebilirsiniz.',
};

export default function ContactPage() {
  return (
    <PageContainer>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-6">İletişim</h1>

        <Card className="mb-8">
          <p className="text-muted mb-6">
            Sorularınız, önerileriniz veya site ekleme talebiniz için aşağıdaki formu
            kullanabilirsiniz. En kısa sürede size geri dönüş yapacağız.
          </p>

          <form className="space-y-4">
            <Input
              label="Adınız Soyadınız"
              type="text"
              placeholder="Adınız Soyadınız"
              fullWidth
              required
            />

            <Input
              label="E-posta Adresiniz"
              type="email"
              placeholder="ornek@email.com"
              fullWidth
              required
            />

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Konu
              </label>
              <select className="w-full px-4 py-2 bg-secondary border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all">
                <option value="">Konu seçiniz</option>
                <option value="suggestion">Öneri</option>
                <option value="question">Soru</option>
                <option value="site-request">Site Ekleme Talebi</option>
                <option value="complaint">Şikayet</option>
                <option value="other">Diğer</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Mesajınız
              </label>
              <textarea
                className="w-full px-4 py-2 bg-secondary border border-border rounded-md text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all min-h-[150px]"
                placeholder="Mesajınızı buraya yazınız..."
                required
              />
            </div>

            <Button variant="primary" size="lg" fullWidth type="submit">
              Gönder
            </Button>
          </form>
        </Card>

        <Card className="bg-secondary/50">
          <h2 className="text-xl font-bold text-foreground mb-4">Diğer İletişim Yolları</h2>
          <div className="space-y-3 text-muted">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@maxbey.com</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Çalışma Saatleri: 7/24</span>
            </div>
          </div>
        </Card>
      </div>
    </PageContainer>
  );
}
